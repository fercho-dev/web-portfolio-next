import { footerText } from "../data"

export const FooterText = () => {
    return (
        <p className="mb-12 text-center md:text-left">{footerText.name} | <a className="underline" href="https://www.ferchodev.com/" target="_blank">{footerText.link}</a> </p>
    )
}