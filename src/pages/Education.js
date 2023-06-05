import React, { useEffect, useState } from 'react';
import { EDUCATION_LIST } from '../assets/EDUCATION_LIST';
import EducationSection from '../components/education/EducationSection';
import image1 from '../assets/canva/1.png';
import image2 from '../assets/canva/2.png';
import image3 from '../assets/canva/3.png';
import image4 from '../assets/canva/4.png';
import image5 from '../assets/canva/5.png';
import image6 from '../assets/canva/6.png';
import image7 from '../assets/canva/7.png';
import image8 from '../assets/canva/8.png';
import image9 from '../assets/canva/9.png';
import image10 from '../assets/canva/10.png';
import image11 from '../assets/canva/11.png';
import image12 from '../assets/canva/12.png';
import image13 from '../assets/canva/13.png';
import image14 from '../assets/canva/14.png';
import image15 from '../assets/canva/15.png';
import image16 from '../assets/canva/16.png';
import image17 from '../assets/canva/17.png';
import image18 from '../assets/canva/18.png';
import image19 from '../assets/canva/19.png';
import image20 from '../assets/canva/20.png';
import image21 from '../assets/canva/21.png';
import image22 from '../assets/canva/22.png';
import image23 from '../assets/canva/23.png';
import image24 from '../assets/canva/24.png';
import image25 from '../assets/canva/25.png';
import image26 from '../assets/canva/26.png';
import image27 from '../assets/canva/27.png';
import image28 from '../assets/canva/28.png';
import image29 from '../assets/canva/29.png';
import image30 from '../assets/canva/30.png';
import image31 from '../assets/canva/31.png';
import image32 from '../assets/canva/32.png';
import image33 from '../assets/canva/33.png';
import image34 from '../assets/canva/34.png';
import image35 from '../assets/canva/35.png';
import image36 from '../assets/canva/36.png';
import image37 from '../assets/canva/37.png';
import image38 from '../assets/canva/38.png';
import image39 from '../assets/canva/39.png';
import image40 from '../assets/canva/40.png';
import image41 from '../assets/canva/41.png';
import image42 from '../assets/canva/42.png';
import image43 from '../assets/canva/43.png';
import image44 from '../assets/canva/44.png';
import image45 from '../assets/canva/45.png';

// AHHHHHHH THIS CODE IS DISGUSTING BUT ........
function Education() {
  const [posts, setPosts] = useState([]);
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
    image24,
    image25,
    image26,
    image27,
    image28,
    image29,
    image30,
    image31,
    image32,
    image33,
    image34,
    image35,
    image36,
    image37,
    image38,
    image39,
    image40,
    image41,
    image42,
    image43,
    image44,
    image45,
  ];
  return (
    <div class='w-full pb-20 bg-gray-50 px-10 flex flex-col items-center'>
      <div class='container flex justify-center mx-auto pt-16'>
        <div className='flex'>
          {posts.map((post) => (
            <div>
              <img crossOrigin={false} src={post.image} alt='thumbnail' />
            </div>
          ))}
        </div>

        <div className='w-full'>
          <h1 class='xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto'>
            Education
          </h1>
        </div>
      </div>
      <div className='w-8/12 mt-8 font-serif'>
        {/* {EDUCATION_LIST.map((section) => (
          <div class='flex flex-col mb-28 gap-8 justify-center items-center'>
            <h2 className='text-xl font-semibold'>{section.title}</h2>
            <p className='text-lg leading-8'>{section.description}</p>
            {section.images.map((imageLink) => (
              <img className='w-7/12' src={imageLink} />
            ))}
            {section.links.map((link) => (
              <a
                href={link.link}
                target='_blank'
                rel='noopener noreferrer'
                className={`text-secondary underline`}
              >
                {link.title}
              </a>
            ))}
          </div>
        ))} */}
        <div class='flex flex-col mb-28 gap-8 justify-center items-center'>
          <h2 className='text-xl font-semibold'>Healthcare Inequity</h2>
          <p className='text-lg leading-8'>
            Health inequities are systematic differences in health outcomes. Health inequities are
            differences in health status or in the distribution of health resources between
            different population groups, arising from the social conditions in which people are
            born, grow, live, work and age. When people from underprivileged or underrepresented
            societies face healthcare issues, there is no guarantee that they will face equal
            treatment. For example, one of the clearest examples is the{' '}
            <b>
              difference between infant health and mortality among Black and white babies born in
              the U.S.
            </b>{' '}
            Black people are more likely than white people to have babies with a low birth weight.
            This not only demonstrates the negative effects of racial equality in healthcare, but
            also demonstrates the detrimental impact of deep-rooted societal inequity in areas that
            do not have high incomes or employment rates. The inequity faced in healthcare settings
            leads to unequal treatment, especially based on race or income status, which results in
            low-income neighborhoods or communities having very little access to affordable and
            reliable healthcare.
          </p>
          {/* {section.images.map((imageLink) => (
            <img className='w-7/12' src={imageLink} />
          ))} */}
          {[
            {
              title: 'Health inequities and their causes',
              link: 'https://www.who.int/news-room/facts-in-pictures/detail/health-inequities-and-their-causes',
            },
            {
              title: 'What is health inequity? Definition, examples, and root causes',
              link: 'https://www.medicalnewstoday.com/articles/health-inequity',
            },
            {
              title: '6 Examples of Health Disparities & Potential Solutions',
              link: 'https://healthadministrationdegree.usc.edu/blog/examples-of-health-disparities/',
            },
          ].map((link) => (
            <a
              href={link.link}
              target='_blank'
              rel='noopener noreferrer'
              className={`text-secondary underline`}
            >
              {link.title}
            </a>
          ))}
        </div>

        <div class='flex flex-col mb-28 gap-8 justify-center items-center'>
          <h2 className='text-xl font-semibold'>Housing Inequity</h2>
          <p className='text-lg leading-8'>
            Housing inequality is{' '}
            <b>
              a disparity in the quality of housing in a society which is a form of economic
              inequality.{' '}
            </b>
            The right to housing is recognized by many national constitutions, and the lack of
            adequate housing can have adverse consequences for an individual or a family. The
            benefits from homeownership have not been shared equally. In the second quarter of 2022,
            the homeownership rate for white households was 75 percent compared to 45 percent for
            Black households, 48 percent for Hispanic households, and 57 percent for non-Hispanic
            households of any other race. Like the overall racial wealth gaps, these gaps in
            homeownership rates have changed little over the last three decades. In fact, the
            Black-white gap in homeownership rates was the same in 2020 as it was in 1970, just two
            years after the passage of the Fair Housing Act of 1968, which sought to end racial
            discrimination in the housing market. The structural racial inequities built into the
            American housing system target those of low income, deep-rooted inequity and cause an
            obviously unstable crisis for those who have wealth disparities.
          </p>
          {[
            'https://i0.wp.com/www.brookings.edu/wp-content/uploads/2016/10/brook-big-ideas_fig_3-1.png?w=768&crop=0%2C0px%2C100%2C9999px&ssl=1',
          ].map((imageLink) => (
            <img className='w-7/12' src={imageLink} />
          ))}
          {[
            {
              title: 'Racial Differences in Economic Security: Housing',
              link: 'https://home.treasury.gov/news/featured-stories/racial-differences-in-economic-security-housing',
            },
            {
              title: 'Systemic Inequality: Displacement, Exclusion, and Segregation',
              link: 'https://www.americanprogress.org/article/systemic-inequality-displacement-exclusion-segregation/',
            },
            {
              title: 'Time for justice: Tackling race inequalities in health and housing',
              link: 'https://www.brookings.edu/research/time-for-justice-tackling-race-inequalities-in-health-and-housing/?amp',
            },
          ].map((link) => (
            <a
              href={link.link}
              target='_blank'
              rel='noopener noreferrer'
              className={`text-secondary underline`}
            >
              {link.title}
            </a>
          ))}
        </div>
        <EducationSection section={EDUCATION_LIST[2]} />
        <div class='flex flex-col mb-28 gap-8 justify-center items-center'>
          <h2 className='text-xl font-semibold'>Transportation Inequity</h2>
          <p className='text-lg leading-8'>
            Transportation inequity is defined as unequal distribution of travel between social
            groups, related to transport resources, including car ownership, access to public
            transport, or indeed all forms of transport more generally. Generally, areas that have
            high inequity levels have less access to reliable transportation to and from education,
            jobs, homes, etc., causing them to have fewer opportunities in a working environment and
            severely decreasing their chances at financial success. Many Americans rely on public
            transit to get to work or other services, but neighborhoods throughout the country lack
            access to public transit, even at peak hours. And{' '}
            <a
              target='_blank'
              rel='noopener noreferrer'
              className={`text-secondary underline`}
              href='https://www.apta.com/research-technical-resources/research-reports/supporting-late-shift-workers-their-transportation-needs-and-the-economy/'
            >
              over 790,000 late-shift workers , who are disproportionately low-income people of
              color,
            </a>
            rely on public transportation to get to work but have far fewer options. Average commute
            times for late-shift workers who take public transit are{' '}
            <a
              target='_blank'
              rel='noopener noreferrer'
              className={`text-secondary underline`}
              href='https://www.apta.com/research-technical-resources/research-reports/supporting-late-shift-workers-their-transportation-needs-and-the-economy/'
            >
              twice as long as those for workers with car access
            </a>
            . This severe lack of public transit cuts their financial opportunities in half and
            further enforces the deep-rooted inequity in areas of low income and few resources.
          </p>
          {[
            {
              title: 'The Unequal Commute',
              link: 'https://www.urban.org/features/unequal-commute',
            },
            {
              title: 'Racism has shaped public transit, and it’s riddled with inequities',
              link: 'https://kinder.rice.edu/urbanedge/racism-has-shaped-public-transit-and-its-riddled-inequities',
            },
            {
              title: 'Public Transportation In The US: A Driver Of Health And Equity',
              link: 'https://www.healthaffairs.org/do/10.1377/hpb20210630.810356/',
            },
          ].map((link) => (
            <a
              href={link.link}
              target='_blank'
              rel='noopener noreferrer'
              className={`text-secondary underline`}
            >
              {link.title}
            </a>
          ))}
        </div>
        <div class='flex flex-col mb-28 gap-8 justify-center items-center'>
          <h2 className='text-xl font-semibold'>Digital Inequity</h2>
          <p className='text-lg leading-8'>
            Digital inequality refers to the disparities in knowledge and ability to use digital and
            information technology based on different demographics, socioeconomic backgrounds, and
            information technology experience and competencies. The lack of technology in schools
            such as tablets or accessible computers hinders the youth's ability to properly learn
            how to operate modern day technology, especially if it is not present in homes. In
            addition, lack of household wifi or accessible internet services also increases the
            negative impacts of digital inequity.{' '}
            <a
              target='_blank'
              rel='noopener noreferrer'
              className={`text-secondary underline`}
              href='https://www.aeaweb.org/articles?id=10.1257/pol.20190648'
            >
              Research
            </a>{' '}
            shows that households that adopted broadband are on average 8.1% more likely to be
            employed, and earned on average 2,202 USD higher annual household income.{' '}
            <a
              target='_blank'
              rel='noopener noreferrer'
              className={`text-secondary underline`}
              href='https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2789619'
            >
              {' '}
              Lack of internet access has also been consistently linked to a high risk of mortality
              from COVID-19
            </a>
            . Hence, the capability to access and work with data and digital technology should be
            considered as fundamental human rights. Without it, there are few opportunities to
            access what the knowledge economy and digital connectivity can provide.
          </p>
          {[
            {
              title: 'What is Digital Inequality and Why does it Matter?',
              link: 'https://www.beaconvc.fund/knowledge/what-is-digital-inequality-and-why-does-it-matter',
            },
            {
              title: 'Chapter 7 Digital Inequality',
              link: 'https://academic.oup.com/edited-volume/34364/chapter-abstract/328422471?redirectedFrom=fulltext',
            },
            {
              title: 'Technology',
              link: 'https://equalitytrust.org.uk/technology',
            },
          ].map((link) => (
            <a
              href={link.link}
              target='_blank'
              rel='noopener noreferrer'
              className={`text-secondary underline`}
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
      <div class='md:grid md:grid-cols-3 w-full flex flex-col items-center'>
        {images.map((image) => (
          <img className='p-4' src={image} />
        ))}
      </div>
    </div>
  );
}

export default Education;
