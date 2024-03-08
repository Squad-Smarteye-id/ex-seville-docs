import React from "react";
import Head from "next/head";

function MetaHead(props) {
    return (
        <Head>
            <title>{props.title}</title>
            <link rel="icon" type="image/svg+xml" href="/Vector.png" />
            <link rel="manifest" href="/app.webmanifest" />
            <meta
                name="description"
                content="Plugin revolusioner dari smarteye.id telah dirancang khusus untuk memberikan kenyamanan luar biasa kepada pengembang virtual reality."
            ></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <meta
                property="og:title"
                content="Plugin revolusioner dari smarteye.id telah dirancang khusus untuk memberikan kenyamanan luar biasa kepada pengembang virtual reality."
            />
            <meta property="og:url" content={props.url} />
            <meta
                property="og:description"
                content="Plugin revolusioner dari smarteye.id telah dirancang khusus untuk memberikan kenyamanan luar biasa kepada pengembang virtual reality."
            />
        </Head>
    );
}

export default MetaHead;