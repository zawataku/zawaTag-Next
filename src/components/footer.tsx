import React from "react";

export default function Footer() {
    return (
        <footer className="footer footer-center bg-slate-100 text-base-content p-4">
            <aside>
                <p className="text-base">Copyright © {new Date().getFullYear()} ZawaTag All rights reserved.</p>
            </aside>
        </footer>
    )
}