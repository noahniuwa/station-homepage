import { useEffect, useState } from 'react'

/* This example requires Tailwind CSS v2.0+ */
const navigation = [
  { name: 'Overview', href: '#' },
  { name: 'How It Works', href: '#' },
  { name: 'Roadmap', href: '#' },
  { name: 'Team', href: '#' },
  { name: 'Community', href: '#' }
]

export default function Navbar() {
  const [hoverState, setHoverState] = useState({
    twitter: false,
    telegram: false,
    medium: false,
    mediumann: false
  })
  function handleMouseOver(e) {
    const newState = Object.assign({}, hoverState)
    const closest = e.target.closest(".navIcon")
    if (closest) {
      newState[closest.id] = true
      setHoverState(newState)
    }
   }

  function handleMouseLeave(e) {
    const newState = Object.assign({}, hoverState)
    const closest = e.target.closest(".navIcon")
    if (closest) {
      newState[closest.id] = false
      setHoverState(newState)
    }
  }
  useEffect(() => {
    /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
    // let prevScrollpos = window.pageYOffset
    window.onscroll = function () {
      // let currentScrollPos = window.pageYOffset
      if (window.pageYOffset < 100) {
        document.getElementById('main-nav').style.top = '0'
      } else {
        document.getElementById('main-nav').style.top = '-150px'
      }
      // prevScrollpos = currentScrollPos
    }
  })
  return (
    <header id="main-nav" className="fixed top-0 left-0 w-full z-10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-green-500 lg:border-none">
          <a href="/">
            <img className="h-10 w-auto" src="logo07.png" alt="" />
          </a>
          <div className="flex items-center">
            <div className="hidden tracking-wider ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-gilroy transition-colors hover:text-gray-200 text-base text-lg font-bold hover:text-gray-200">
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex ml-10 space-x-4">
            <a className="navIcon" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}  href="#" id="twitter">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 43.171 43.171"><defs/><path className="transition-colors" fill={hoverState.twitter === true ? "#e5e7eb" : "#00f892"} d="M43.17 21.585c0 11.921-9.663 21.586-21.585 21.586C9.665 43.17 0 33.506 0 21.585 0 9.665 9.664 0 21.585 0c11.922 0 21.586 9.664 21.586 21.585"/><path fill="#464383" d="M34.54 15.127c-.601.817-1.288 1.557-2.082 2.187-.252.2-.27.445-.272.72-.023 2.424-.563 4.728-1.717 6.858-2.245 4.148-5.65 6.73-10.376 7.368-3.222.435-6.33.027-9.203-1.622-.094-.054-.194-.097-.285-.156-.103-.067-.256-.126-.226-.27.031-.152.194-.136.316-.138.415-.006.83-.002 1.245-.007 1.903-.025 3.587-.704 5.151-1.737.04-.026.062-.079.096-.125-.165-.156-.373-.138-.558-.185-1.657-.419-2.864-1.384-3.594-2.94-.198-.42-.06-.556.37-.538.395.017.792.004 1.21-.05-.53-.248-1.047-.494-1.498-.86-1.124-.918-1.86-2.051-1.974-3.527-.042-.555.033-.59.573-.397.364.13.728.288 1.15.241-.043-.27-.26-.368-.394-.526-1.359-1.602-1.673-3.39-.94-5.352.242-.647.36-.67.825-.172 1.664 1.784 3.597 3.154 5.918 3.96 1.011.351 2.05.56 3.106.698.62.08.702.008.665-.623-.106-1.835.535-3.337 2.023-4.415 1.979-1.434 4.344-1.358 6.25.18.377.304.707.351 1.136.2.663-.237 1.335-.445 1.961-.771.124-.065.277-.18.4-.073.162.142-.002.299-.062.435a4.752 4.752 0 01-1.044 1.5c-.148.145-.349.255-.425.521.8-.101 1.513-.404 2.254-.6z"/></svg>            </a>
            <a className="navIcon" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} href="#" id="telegram">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 43.171 43.171"><defs/><path className="transition-colors" fill={hoverState.telegram === true ? "#e5e7eb" : "#00f892"} d="M43.17 21.585c0 11.921-9.664 21.586-21.585 21.586C9.665 43.17 0 33.506 0 21.585 0 9.665 9.664 0 21.585 0c11.921 0 21.586 9.664 21.586 21.585"/><path fill="#464383" d="M7.382 20.995v-.39c.21-.372.55-.59.928-.751.344-.146.693-.278 1.041-.41 7.06-2.705 14.12-5.408 21.18-8.11a2.18 2.18 0 01.563-.144c.517-.052.92.189 1.12.671l.09.226v.779c-.016.055-.034.109-.045.164-1.073 5.028-2.145 10.057-3.22 15.086-.202.943-.375 1.895-.63 2.824-.296 1.076-1.148 1.344-2.075.707-.034-.022-.066-.047-.099-.07-1.773-1.3-3.55-2.595-5.318-3.9-.19-.141-.305-.13-.472.033-.898.869-1.807 1.724-2.71 2.587a1.36 1.36 0 01-.65.363c-.296.066-.35.018-.329-.278.12-1.731.242-3.461.356-5.193a.711.711 0 01.258-.522c1.536-1.371 3.067-2.75 4.6-4.126 1.51-1.354 3.02-2.707 4.528-4.062.428-.385.855-.771 1.28-1.16.083-.077.173-.17.101-.295-.067-.118-.19-.11-.305-.092a1.35 1.35 0 00-.516.207c-.308.195-.618.389-.927.583-3.995 2.5-7.99 5-11.984 7.502a.48.48 0 01-.435.059c-1.81-.567-3.624-1.128-5.436-1.693-.354-.11-.674-.28-.894-.595"/></svg>            </a>
            <a className="navIcon" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} href="#" id="telegramann">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 43.17 43.171"><defs/><path className="transition-colors" fill={hoverState.telegramann === true ? "#e5e7eb" : "#00f892"} d="M43.17 21.585c0 11.921-9.664 21.586-21.585 21.586C9.664 43.17 0 33.506 0 21.585 0 9.665 9.664 0 21.585 0 33.506 0 43.17 9.664 43.17 21.585"/><path fill="#464383" d="M32.218 9.877H12.09a2.523 2.523 0 00-2.516 2.516v22.644l5.032-5.032h17.612a2.523 2.523 0 002.516-2.516V12.393a2.524 2.524 0 00-2.516-2.516"/><path fill={hoverState.telegramann === true ? "#e5e7eb" : "#00f892"} d="M14.37 19.563v-.226c.123-.215.319-.341.538-.435.199-.085.401-.16.603-.237l12.263-4.696c.105-.041.213-.072.326-.083.3-.03.533.109.648.389l.052.13v.451l-.026.095c-.621 2.912-1.241 5.824-1.864 8.735-.116.546-.217 1.097-.365 1.636-.171.622-.665.777-1.201.409l-.057-.041c-1.027-.752-2.056-1.503-3.08-2.258-.11-.082-.176-.075-.273.019-.52.503-1.046.998-1.57 1.498a.783.783 0 01-.375.21c-.172.038-.202.01-.19-.161.07-1.002.14-2.004.205-3.006a.41.41 0 01.15-.303c.89-.794 1.776-1.592 2.663-2.389l2.622-2.352c.248-.222.495-.446.74-.672.05-.044.101-.097.06-.17-.04-.069-.111-.064-.177-.054a.781.781 0 00-.298.12l-.538.337c-2.313 1.448-4.626 2.895-6.938 4.344a.276.276 0 01-.252.034c-1.049-.328-2.099-.652-3.148-.98-.205-.063-.39-.162-.517-.344"/></svg>            </a>
            <a className="navIcon" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} href="#" id="medium">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 43.171 43.171"><defs/><path className="transition-colors" fill={hoverState.medium === true ? "#e5e7eb" : "#00f892"} d="M43.172 21.59c0 11.921-9.664 21.585-21.585 21.585C9.666 43.175.002 33.511.002 21.59S9.666.005 21.587.005c11.921 0 21.585 9.664 21.585 21.585"/><path fill="#464383" d="M14.688 30.59c-4.934-.005-8.998-3.972-9.003-8.999a8.991 8.991 0 019.018-9.015 8.99 8.99 0 018.995 9.03c-.013 5.02-4.074 8.983-9.01 8.984M33.632 21.7c-.004.376-.024.866-.07 1.354-.044.477-.11.95-.201 1.42-.201 1.036-.505 2.037-.982 2.981a6.63 6.63 0 01-1.073 1.573c-.301.321-.64.597-1.03.805-.391.208-.808.324-1.251.325a2.625 2.625 0 01-1.173-.275 3.92 3.92 0 01-1.132-.858 6.66 6.66 0 01-1.068-1.566c-.34-.669-.59-1.372-.782-2.098a15.002 15.002 0 01-.467-4.146c.011-.39.041-.781.073-1.171.049-.598.149-1.187.28-1.772.181-.806.432-1.589.786-2.337.287-.606.63-1.175 1.076-1.678.35-.394.746-.73 1.223-.963.444-.217.912-.32 1.407-.272.362.034.702.144 1.023.314.436.23.805.545 1.131.911.381.427.687.905.948 1.413.42.815.708 1.676.912 2.568.107.467.188.938.248 1.413.083.646.118 1.295.122 2.059M34.142 21.31c.01-.33.023-.94.05-1.55.026-.57.075-1.14.139-1.707.074-.657.17-1.31.313-1.956.102-.465.225-.924.41-1.365.067-.16.14-.32.242-.461a1.64 1.64 0 01.221-.26c.191-.174.408-.17.602 0 .106.092.188.204.26.323.147.24.249.501.339.767.157.462.27.935.355 1.414.073.41.137.82.192 1.233.046.35.076.703.108 1.055.051.545.085 1.09.095 1.637.01.623.018 1.246.012 1.869a22.945 22.945 0 01-.09 1.85c-.045.49-.091.98-.153 1.469-.095.758-.233 1.51-.455 2.243-.08.266-.175.526-.298.775-.071.145-.15.285-.26.404-.06.066-.127.127-.201.175a.368.368 0 01-.41.005.81.81 0 01-.214-.186 2.134 2.134 0 01-.3-.503 6.546 6.546 0 01-.365-1.088 14.198 14.198 0 01-.32-1.682c-.052-.402-.099-.804-.14-1.207-.03-.29-.048-.58-.066-.871-.044-.7-.062-1.402-.066-2.383"/></svg>            </a>
            <div className="App">
     </div>
          </div>
        </div>
        <div className="py-4 font-gilroy flex flex-wrap justify-center space-x-6 lg:hidden">
          {navigation.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-gilroy text-base font-medium text-gray-200 hover:text-indigo-50">
              {link.name}
            </a>
          ))}
        </div>
      </nav>

      <style jsx>{`
 
        #main-nav {
          transition: top 0.5s;
          backdrop-filter: blur(1px);
        }

        a img {
          color: '#00fa94';
        }

        * {
          color: #00fa94;
        }
      `}</style>
    </header>
  )
}
