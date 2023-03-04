import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { RoughNotation } from 'react-rough-notation'

import { currentDayName } from '@/lib/utils/dateUtils'

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center justify-between md:flex-row mt-10 mb-4">
        <div className="flex space-x-4">
          <SocialIcon kind="github" href={siteMetadata.github} size="5" />
          <SocialIcon kind="instagram" href={siteMetadata.instagram} size="5" />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="5" />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size="5" />
        </div>
        <div>
          <a
            href="https://www.buymeacoffee.com/dorks365"
            target="_blank"
            rel="noreferrer"
            className="btn flex items-cente p-2 rounded text-sm w-auto text-gray-500 dark:text-gray-400"
          >
            <RoughNotation
              type="box"
              show={true}
              color="#ADD8E6"
              animationDelay={800}
              animationDuration={1200}
            >
              ☕ Buy Us a Coffee
            </RoughNotation>
          </a>
        </div>
        <div className="flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          {siteMetadata.author} | Have a good {currentDayName()}!
        </div>
      </div>
    </footer>
  )
}
