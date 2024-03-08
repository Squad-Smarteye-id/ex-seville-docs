import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'
import Link from 'next/link'
import { NextSeo } from 'next-seo';

const config: DocsThemeConfig = {
  logo: (
    <>
    <Image
      src="/Vector.png"
      width={20}
      height={20}
      alt='seville'
    />
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        Seville
      </span>
    </>
  ),
  chat: {
    link: 'https://discord.com',
  },
  // docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: (
      <Link href="https://innocent-next.svcc.io" target='_blank'>
        smarteye.id © {new Date().getFullYear()} {' '}
      </Link>
    )
  },
}

export default config
