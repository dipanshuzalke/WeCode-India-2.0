'use client'

import {
  Globe,
  Code,
  Users,
  BookOpen,
} from 'lucide-react'
import {
  SiReact,
  SiRedux,
  SiReactquery,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiTailwindcss,
  SiFigma,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiDjango,
  SiFastapi,
  SiDotnet,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiRedis,
  SiPostgresql,
  SiTensorflow,
  SiRabbitmq,
  SiCelery,
  SiScrapy,
  SiSelenium
} from 'react-icons/si'
import dynamic from 'next/dynamic'
import projectsData from '@/data/projects.json';
import { Case } from '@/components/ui/cases-with-infinite-scroll';
import { useRouter } from 'next/navigation';
const PixelCanvas = dynamic(
  () => import('@/components/ui/pixel-canvas').then(mod => mod.PixelCanvas),
  { ssr: false }
)

type Project = {
  id: string;
  title: string;
  summary: string;
  domain: string;
  // Add other fields as needed
};

const webDevProjects = (projectsData as Project[]).filter(
  (project) => project.domain === 'Web Development'
);

const WebDevelopmentPage = () => {
  const router = useRouter();
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-black dark:to-blue-900'>
      {/* Header */}
      <div className='bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-600 dark:to-cyan-600 text-white'>
        <div className='max-w-7xl mx-auto px-6 py-16'>
          <div className='flex items-center space-x-4 mb-6'>
            <div className='bg-white/20 dark:bg-white/10 p-3 rounded-xl'>
              <Globe className='w-8 h-8' />
            </div>
            <div>
              <h1 className='text-4xl font-bold'>Web Development</h1>
              <p className='text-blue-100 dark:text-blue-200 text-lg'>
                Frontend and backend technologies, frameworks, and deployment
              </p>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-8'>
            <div className='bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6'>
              <div className='flex items-center space-x-3'>
                <Code className='w-6 h-6' />
                <div>
                  <p className='text-2xl font-bold'>42</p>
                  <p className='text-blue-100 dark:text-blue-200'>Projects</p>
                </div>
              </div>
            </div>
            <div className='bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6'>
              <div className='flex items-center space-x-3'>
                <BookOpen className='w-6 h-6' />
                <div>
                  <p className='text-2xl font-bold'>87</p>
                  <p className='text-blue-100 dark:text-blue-200'>Resources</p>
                </div>
              </div>
            </div>
            <div className='bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6'>
              <div className='flex items-center space-x-3'>
                <Users className='w-6 h-6' />
                <div>
                  <p className='text-2xl font-bold'>12.4K</p>
                  <p className='text-blue-100 dark:text-blue-200'>Students</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='space-y-8 max-w-7xl mx-auto py-20'>
      <h2 className="text-xl  md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
            Technologies you will learn
          </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* Frontend Technologies */}
          <div className='bg-gray-100 dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>
              Frontend
            </h3>
            <div className='flex flex-wrap gap-3'>
              <div className='relative w-32 h-12 flex items-center justify-center rounded-full overflow-hidden border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow'>
                <PixelCanvas
                  gap={10}
                  speed={25}
                  colors={['#e0f2fe', '#7dd3fc', '#0ea5e9']}
                  variant='icon'
                  style={{ zIndex: 0 }}
                />
                <div className='relative z-10 flex items-center space-x-2'>
                  <SiReact className='w-5 h-5 text-blue-400' />
                  <span className='font-medium text-sm text-gray-900 dark:text-white'>
                    React.js
                  </span>
                </div>
              </div>
              <div className='relative w-32 h-12 flex items-center justify-center rounded-full overflow-hidden border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow'>
                <PixelCanvas
                  gap={10}
                  speed={25}
                  colors={['#e0f2fe', '#7dd3fc', '#0ea5e9']}
                  variant='icon'
                  style={{ zIndex: 0 }}
                />
                <div className='relative z-10 flex items-center space-x-2'>
                  <SiRedux className='w-5 h-5 text-purple-300' />
                  <span className='font-medium text-sm text-gray-900 dark:text-white'>
                    Redux
                  </span>
                </div>
              </div>
              <div className='relative w-32 h-12 flex items-center justify-center rounded-full overflow-hidden border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow'>
                <PixelCanvas
                  gap={10}
                  speed={25}
                  colors={['#e0f2fe', '#7dd3fc', '#0ea5e9']}
                  variant='icon'
                  style={{ zIndex: 0 }}
                />
                <div className='relative z-10 flex items-center space-x-2'>
                  <SiReactquery className='w-5 h-5 text-pink-300' />
                  <span className='font-medium text-sm text-gray-900 dark:text-white'>
                    React Query
                  </span>
                </div>
              </div>
              <div className='relative w-32 h-12 flex items-center justify-center rounded-full overflow-hidden border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow'>
                <PixelCanvas
                  gap={10}
                  speed={25}
                  colors={['#e0f2fe', '#7dd3fc', '#0ea5e9']}
                  variant='icon'
                  style={{ zIndex: 0 }}
                />
                <div className='relative z-10 flex items-center space-x-2'>
                  <SiNextdotjs className='w-5 h-5 text-white' />
                  <span className='font-medium text-sm text-gray-900 dark:text-white'>
                    Next.js
                  </span>
                </div>
              </div>
              <div className='relative w-32 h-12 flex items-center justify-center rounded-full overflow-hidden border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow'>
                <PixelCanvas
                  gap={10}
                  speed={25}
                  colors={['#e0f2fe', '#7dd3fc', '#0ea5e9']}
                  variant='icon'
                  style={{ zIndex: 0 }}
                />
                <div className='relative z-10 flex items-center space-x-2'>
                  <SiHtml5 className='w-5 h-5 text-orange-300' />
                  <span className='font-medium text-sm text-gray-900 dark:text-white'>
                    HTML
                  </span>
                </div>
              </div>
              <div className='relative w-32 h-12 flex items-center justify-center rounded-full overflow-hidden border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow'>
                <PixelCanvas
                  gap={10}
                  speed={25}
                  colors={['#e0f2fe', '#7dd3fc', '#0ea5e9']}
                  variant='icon'
                  style={{ zIndex: 0 }}
                />
                <div className='relative z-10 flex items-center space-x-2'>
                  <SiCss3 className='w-5 h-5 text-blue-300' />
                  <span className='font-medium text-sm text-gray-900 dark:text-white'>
                    CSS
                  </span>
                </div>
              </div>
              <div className='relative w-32 h-12 flex items-center justify-center rounded-full overflow-hidden border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow'>
                <PixelCanvas
                  gap={10}
                  speed={25}
                  colors={['#e0f2fe', '#7dd3fc', '#0ea5e9']}
                  variant='icon'
                  style={{ zIndex: 0 }}
                />
                <div className='relative z-10 flex items-center space-x-2'>
                  <SiJavascript className='w-5 h-5 text-yellow-300' />
                  <span className='font-medium text-sm text-gray-900 dark:text-white'>
                    JavaScript
                  </span>
                </div>
              </div>
              <div className='relative w-32 h-12 flex items-center justify-center rounded-full overflow-hidden border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow'>
                <PixelCanvas
                  gap={10}
                  speed={25}
                  colors={['#e0f2fe', '#7dd3fc', '#0ea5e9']}
                  variant='icon'
                  style={{ zIndex: 0 }}
                />
                <div className='relative z-10 flex items-center space-x-2'>
                  <SiBootstrap className='w-5 h-5 text-purple-400' />
                  <span className='font-medium text-sm text-gray-900 dark:text-white'>
                    Bootstrap
                  </span>
                </div>
              </div>
              <div className='relative w-32 h-12 flex items-center justify-center rounded-full overflow-hidden border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow'>
                <PixelCanvas
                  gap={10}
                  speed={25}
                  colors={['#e0f2fe', '#7dd3fc', '#0ea5e9']}
                  variant='icon'
                  style={{ zIndex: 0 }}
                />
                <div className='relative z-10 flex items-center space-x-2'>
                  <SiTailwindcss className='w-5 h-5 text-cyan-300' />
                  <span className='font-medium text-sm text-gray-900 dark:text-white'>
                    TailwindCSS
                  </span>
                </div>
              </div>
              <div className='relative w-32 h-12 flex items-center justify-center rounded-full overflow-hidden border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow'>
                <PixelCanvas
                  gap={10}
                  speed={25}
                  colors={['#e0f2fe', '#7dd3fc', '#0ea5e9']}
                  variant='icon'
                  style={{ zIndex: 0 }}
                />
                <div className='relative z-10 flex items-center space-x-2'>
                  <SiReact className='w-5 h-5 text-blue-400' />
                  <span className='font-medium text-sm text-gray-900 dark:text-white'>
                    Material UI
                  </span>
                </div>
              </div>
              <div className='relative w-32 h-12 flex items-center justify-center rounded-full overflow-hidden border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow'>
                <PixelCanvas
                  gap={10}
                  speed={25}
                  colors={['#e0f2fe', '#7dd3fc', '#0ea5e9']}
                  variant='icon'
                  style={{ zIndex: 0 }}
                />
                <div className='relative z-10 flex items-center space-x-2'>
                  <SiFigma className='w-5 h-5 text-pink-300' />
                  <span className='font-medium text-sm text-gray-900 dark:text-white'>
                    Figma
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Backend Technologies */}
          <div className='bg-gray-100 dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>
              Backend
            </h3>
            <div className='flex flex-wrap gap-3'>
              <div className='relative w-32 h-12 flex items-center justify-center rounded-full overflow-hidden border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow'>
                <PixelCanvas
                  gap={10}
                  speed={25}
                  colors={['#e0f2fe', '#7dd3fc', '#0ea5e9']}
                  variant='icon'
                  style={{ zIndex: 0 }}
                />
                <div className='relative z-10 flex items-center space-x-2'>
                  <SiNodedotjs className='w-5 h-5 text-green-300' />
                  <span className='font-medium text-sm text-gray-900 dark:text-white'>
                    Node.js
                  </span>
                </div>
              </div>
              <div className='relative w-32 h-12 flex items-center justify-center rounded-full overflow-hidden border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow'>
                <PixelCanvas
                  gap={10}
                  speed={25}
                  colors={['#e0f2fe', '#7dd3fc', '#0ea5e9']}
                  variant='icon'
                  style={{ zIndex: 0 }}
                />
                <div className='relative z-10 flex items-center space-x-2'>
                  <SiExpress className='w-5 h-5 text-gray-300' />
                  <span className='font-medium text-sm text-gray-900 dark:text-white'>
                    Express.js
                  </span>
                </div>
              </div>
              <div className='relative w-32 h-12 flex items-center justify-center rounded-full overflow-hidden border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow'>
                <PixelCanvas
                  gap={10}
                  speed={25}
                  colors={['#e0f2fe', '#7dd3fc', '#0ea5e9']}
                  variant='icon'
                  style={{ zIndex: 0 }}
                />
                <div className='relative z-10 flex items-center space-x-2'>
                  <SiPython className='w-5 h-5 text-blue-300' />
                  <span className='font-medium text-sm text-gray-900 dark:text-white'>
                    Python
                  </span>
                </div>
              </div>
              <div className='relative w-32 h-12 flex items-center justify-center rounded-full overflow-hidden border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow'>
                <PixelCanvas
                  gap={10}
                  speed={25}
                  colors={['#e0f2fe', '#7dd3fc', '#0ea5e9']}
                  variant='icon'
                  style={{ zIndex: 0 }}
                />
                <div className='relative z-10 flex items-center space-x-2'>
                  <SiDjango className='w-5 h-5 text-green-400' />
                  <span className='font-medium text-sm text-gray-900 dark:text-white'>
                    Django
                  </span>
                </div>
              </div>
              <div className='relative w-32 h-12 flex items-center justify-center rounded-full overflow-hidden border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow'>
                <PixelCanvas
                  gap={10}
                  speed={25}
                  colors={['#e0f2fe', '#7dd3fc', '#0ea5e9']}
                  variant='icon'
                  style={{ zIndex: 0 }}
                />
                <div className='relative z-10 flex items-center space-x-2'>
                  <SiFastapi className='w-5 h-5 text-green-300' />
                  <span className='font-medium text-sm text-gray-900 dark:text-white'>
                    FastAPI
                  </span>
                </div>
              </div>
              <div className='relative w-32 h-12 flex items-center justify-center rounded-full overflow-hidden border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow'>
                <PixelCanvas
                  gap={10}
                  speed={25}
                  colors={['#e0f2fe', '#7dd3fc', '#0ea5e9']}
                  variant='icon'
                  style={{ zIndex: 0 }}
                />
                <div className='relative z-10 flex items-center space-x-2'>
                  <SiDotnet className='w-5 h-5 text-purple-400' />
                  <span className='font-medium text-sm text-gray-900 dark:text-white'>
                    .NET
                  </span>
                </div>
              </div>
              <div className='relative w-32 h-12 flex items-center justify-center rounded-full overflow-hidden border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow'>
                <PixelCanvas
                  gap={10}
                  speed={25}
                  colors={['#e0f2fe', '#7dd3fc', '#0ea5e9']}
                  variant='icon'
                  style={{ zIndex: 0 }}
                />
                <div className='relative z-10 flex items-center space-x-2'>
                  <SiMysql className='w-5 h-5 text-blue-400' />
                  <span className='font-medium text-sm text-gray-900 dark:text-white'>
                    MySQL
                  </span>
                </div>
              </div>
              <div className='relative w-32 h-12 flex items-center justify-center rounded-full overflow-hidden border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow'>
                <PixelCanvas
                  gap={10}
                  speed={25}
                  colors={['#e0f2fe', '#7dd3fc', '#0ea5e9']}
                  variant='icon'
                  style={{ zIndex: 0 }}
                />
                <div className='relative z-10 flex items-center space-x-2'>
                  <SiMongodb className='w-5 h-5 text-green-400' />
                  <span className='font-medium text-sm text-gray-900 dark:text-white'>
                    MongoDB
                  </span>
                </div>
              </div>
              <div className='relative w-32 h-12 flex items-center justify-center rounded-full overflow-hidden border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow'>
                <PixelCanvas
                  gap={10}
                  speed={25}
                  colors={['#e0f2fe', '#7dd3fc', '#0ea5e9']}
                  variant='icon'
                  style={{ zIndex: 0 }}
                />
                <div className='relative z-10 flex items-center space-x-2'>
                  <SiFirebase className='w-5 h-5 text-yellow-300' />
                  <span className='font-medium text-sm text-gray-900 dark:text-white'>
                    Firebase
                  </span>
                </div>
              </div>
              <div className='relative w-32 h-12 flex items-center justify-center rounded-full overflow-hidden border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow'>
                <PixelCanvas
                  gap={10}
                  speed={25}
                  colors={['#e0f2fe', '#7dd3fc', '#0ea5e9']}
                  variant='icon'
                  style={{ zIndex: 0 }}
                />
                <div className='relative z-10 flex items-center space-x-2'>
                  <SiRedis className='w-5 h-5 text-red-300' />
                  <span className='font-medium text-sm text-gray-900 dark:text-white'>
                    Redis
                  </span>
                </div>
              </div>
              <div className='relative w-32 h-12 flex items-center justify-center rounded-full overflow-hidden border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow'>
                <PixelCanvas
                  gap={10}
                  speed={25}
                  colors={['#e0f2fe', '#7dd3fc', '#0ea5e9']}
                  variant='icon'
                  style={{ zIndex: 0 }}
                />
                <div className='relative z-10 flex items-center space-x-2'>
                  <SiPostgresql className='w-5 h-5 text-blue-400' />
                  <span className='font-medium text-sm text-gray-900 dark:text-white'>
                    PostgreSQL
                  </span>
                </div>
              </div>
              <div className='relative w-32 h-12 flex items-center justify-center rounded-full overflow-hidden border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow'>
                <PixelCanvas
                  gap={10}
                  speed={25}
                  colors={['#e0f2fe', '#7dd3fc', '#0ea5e9']}
                  variant='icon'
                  style={{ zIndex: 0 }}
                />
                <div className='relative z-10 flex items-center space-x-2'>
                  <SiTensorflow className='w-5 h-5 text-orange-300' />
                  <span className='font-medium text-sm text-gray-900 dark:text-white'>
                    TensorFlow
                  </span>
                </div>
              </div>
              <div className='relative w-32 h-12 flex items-center justify-center rounded-full overflow-hidden border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow'>
                <PixelCanvas
                  gap={10}
                  speed={25}
                  colors={['#e0f2fe', '#7dd3fc', '#0ea5e9']}
                  variant='icon'
                  style={{ zIndex: 0 }}
                />
                <div className='relative z-10 flex items-center space-x-2'>
                  <SiRabbitmq className='w-5 h-5 text-orange-200' />
                  <span className='font-medium text-sm text-gray-900 dark:text-white'>
                    RabbitMQ
                  </span>
                </div>
              </div>
              <div className='relative w-32 h-12 flex items-center justify-center rounded-full overflow-hidden border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow'>
                <PixelCanvas
                  gap={10}
                  speed={25}
                  colors={['#e0f2fe', '#7dd3fc', '#0ea5e9']}
                  variant='icon'
                  style={{ zIndex: 0 }}
                />
                <div className='relative z-10 flex items-center space-x-2'>
                  <SiCelery className='w-5 h-5 text-green-300' />
                  <span className='font-medium text-sm text-gray-900 dark:text-white'>
                    Celery
                  </span>
                </div>
              </div>
              <div className='relative w-32 h-12 flex items-center justify-center rounded-full overflow-hidden border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow'>
                <PixelCanvas
                  gap={10}
                  speed={25}
                  colors={['#e0f2fe', '#7dd3fc', '#0ea5e9']}
                  variant='icon'
                  style={{ zIndex: 0 }}
                />
                <div className='relative z-10 flex items-center space-x-2'>
                  <SiScrapy className='w-5 h-5 text-yellow-300' />
                  <span className='font-medium text-sm text-gray-900 dark:text-white'>
                    Scrapy
                  </span>
                </div>
              </div>
              <div className='relative w-32 h-12 flex items-center justify-center rounded-full overflow-hidden border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow'>
                <PixelCanvas
                  gap={10}
                  speed={25}
                  colors={['#e0f2fe', '#7dd3fc', '#0ea5e9']}
                  variant='icon'
                  style={{ zIndex: 0 }}
                />
                <div className='relative z-10 flex items-center space-x-2'>
                  <SiSelenium className='w-5 h-5 text-red-300' />
                  <span className='font-medium text-sm text-gray-900 dark:text-white'>
                    Selenium
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Carousel of Web Development Projects */}
        <Case projects={webDevProjects} />

        <div className='bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-600 dark:to-cyan-600 rounded-xl p-8 text-white'>
          <h3 className='text-xl font-bold mb-4'>
            Ready to Start Your Web Development Journey?
          </h3>
          <p className='text-blue-100 dark:text-blue-200 mb-6'>
            Join thousands of developers learning modern web technologies
          </p>
          <button
            className='bg-white dark:bg-gray-800 text-black dark:text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors'
            onClick={() => router.push('/phases/domains/web/roadmap')}
          >
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  )
}

export default WebDevelopmentPage
