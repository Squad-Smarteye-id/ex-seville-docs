import { Nunito_Sans } from "next/font/google";
import MetaHead from "../components/MetaHead";

const nunitoSans = Nunito_Sans({
    weight: "400",
    subsets: ["latin"],
});

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <MetaHead />
            <main className={nunitoSans.className}>
                <Component {...pageProps} />
            </main>
        </>
    );
}
