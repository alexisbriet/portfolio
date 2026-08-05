"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { prisma } from "@/lib/prisma";

export async function login(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const supabase = await createClient();

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        return {
            success: false,
            message: error.message,
        };
    }

    redirect("/admin");
}

export async function register(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const username = formData.get("username") as string;

    const supabase = await createClient();

    const { data, error } = await supabase.auth.signUp({
        email,
        password,
    });

    if (error) {
        return {
            success: false,
            message: error.message,
        };
    }

    if (!data.user) {
        return {
            success: false,
            message: "Impossible de créer le compte.",
        };
    }

    const existingUser = await prisma.user.findUnique({
        where: {
            email,
        },
    });

    if (!existingUser) {
        await prisma.user.create({
            data: {
                supabaseId: data.user.id,
                email,
                username,
                role: "USER",
            },
        });
    }

    redirect("/admin");
}

export async function logout() {
    const supabase = await createClient();

    await supabase.auth.signOut();

    redirect("/login");
}

export async function getCurrentUser() {
    const supabase = await createClient();

    const {
        data: { user: authUser },
    } = await supabase.auth.getUser();

    if (!authUser) {
        return null;
    }

    const user = await prisma.user.findUnique({
        where: {
            supabaseId: authUser.id,
        },
    });

    return user;
}