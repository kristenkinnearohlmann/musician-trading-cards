import Link from 'next/link'

export default function FirstPost() {
    return (
        <>
        <h1>First Post</h1>
        <h2>
            {/* see also Routing documentation: https://nextjs.org/docs/routing/introduction */}
            {/* Link documentation: https://nextjs.org/docs/api-reference/next/link */}
            <Link href="/">
                <a>Back to home</a>
            </Link>
        </h2>
        </>
    )
}