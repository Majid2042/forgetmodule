import Paper from "@mui/material/Paper";
import React from "react";
import "./GuestLayout.css";

interface GuestLayoutProps {
    title: string;
    children: React.ReactNode;
}

export default function GuestLayout({ title, children }: GuestLayoutProps) {
    return (
        <div className="guest-layout">
            <Paper className="paper" elevation={9}>
                <header>
                    <h1>{title}</h1>
                    <hr />
                </header>
                <main>{children}</main>
            </Paper>
        </div>
    );
}
