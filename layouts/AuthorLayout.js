import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import Experience from '@/components/Experience'
import experienceData from '@/data/experienceData'
import { RoughNotation } from 'react-rough-notation'

export default function AuthorLayout({ children, frontMatter }) {
  const {
    name,
    avatar,
    occupation,
    company,
    email,
    twitter,
    linkedin,
    github,
    text1,
    salutation,
    text2,
    text3,
    summary,
  } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="">
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <Image
              src={avatar}
              alt="avatar"
              width="192px"
              height="192px"
              className="w-48 h-48 rounded-full object-cover"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
          </div>
          {/* <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">{children}</div> */}
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <p>{text1}</p>
            <span>{salutation}</span>
            <br />
            <p>
              <RoughNotation
                type="bracket"
                brackets={['left', 'right']}
                show={true}
                color="#FF0000"
              >
                {text2}
              </RoughNotation>
            </p>
            <p>{summary}</p>
            <p>
              Feel free to reach out if you have anything to talk about, you can reach me on{' '}
              <RoughNotation type="highlight" show={true} color="#FBCFE8" animationDelay={1200}>
                <span className="dark:text-gray-700">{email} </span>
              </RoughNotation>
              or on social media.
            </p>
          </div>
        </div>
        <div className="mt-10">
          <div className="pt-6 pb-8 space-y-2 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Now
            </h1>
          </div>
          <div className="pt-8 pb-8 max-w-none xl:col-span-2">
            {name === 'João Ferreira' ? (
              <Experience
                key={experienceData[0].company}
                title={experienceData[0].title}
                company={experienceData[0].company}
                location={experienceData[0].location}
                range={experienceData[0].range}
                url={experienceData[0].url}
                text1={experienceData[0].text1}
                text2={experienceData[0].text2}
                text3={experienceData[0].text3}
              />
            ) : (
              <Experience
                key={experienceData[1].company}
                title={experienceData[1].title}
                company={experienceData[1].company}
                location={experienceData[1].location}
                range={experienceData[1].range}
                url={experienceData[1].url}
                text1={experienceData[1].text1}
                text2={experienceData[1].text2}
                text3={experienceData[1].text3}
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}
