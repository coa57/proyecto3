import { Navigate, useLocation } from "react-router-dom";
import { authRepository } from "../repositories/authRepository";
import type { ReactNode } from "react";
export function Protected({ children, admin = false }: { children: ReactNode; admin?: boolean }) { const user = authRepository.getCurrentUser(); const location = useLocation(); if (!user) return <Navigate to="/login" state={{ from: location.pathname }} replace />; if (admin && user.role !== "ADMIN") return <Navigate to="/" replace />; return <>{children}</>; }
