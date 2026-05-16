"use client";

import { useState, useEffect } from "react";
import { mockUser, type MockUser } from "./mock-data";

const STORAGE_KEY = "arsi_auth_user";

function matchesCredentials(identifier: string, password: string): boolean {
  const id = identifier.trim().toLowerCase();
  const emailMatch = id === mockUser.email.toLowerCase() && password === mockUser.password;
  const phoneMatch = id === mockUser.phone && password === mockUser.password;
  return emailMatch || phoneMatch;
}

export function useAuth() {
  const [user, setUser] = useState<MockUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setUser(JSON.parse(stored));
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
    setLoading(false);
  }, []);

  function login(identifier: string, password: string): { success: boolean; error?: string } {
    if (!matchesCredentials(identifier, password)) {
      return { success: false, error: "მეილი/ტელეფონი ან პაროლი არასწორია" };
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(mockUser));
    setUser(mockUser);
    return { success: true };
  }

  function register(identifier: string, password: string): { success: boolean; error?: string } {
    if (password.length < 6) {
      return { success: false, error: "პაროლი უნდა იყოს მინიმუმ 6 სიმბოლო" };
    }
    // Mock registration — always succeeds and logs in as demo user
    localStorage.setItem(STORAGE_KEY, JSON.stringify(mockUser));
    setUser(mockUser);
    return { success: true };
  }

  function logout() {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
  }

  return { user, loading, login, register, logout };
}
