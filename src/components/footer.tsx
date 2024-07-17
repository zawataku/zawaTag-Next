import React from "react";

export default function Footer() {
    return (
        <footer className="footer footer-center bg-slate-100 p-4 text-black">
            <aside>
                <p className="text-base">Copyright © {new Date().getFullYear()} ZawaTag All rights reserved.</p>
            </aside>
        </footer>
    )
}