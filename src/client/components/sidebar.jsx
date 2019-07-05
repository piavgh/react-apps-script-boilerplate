import React from 'react'
import {library} from '@fortawesome/fontawesome-svg-core'
import {
  faBook, faFolder, faFileAlt, faEnvelope, faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons'

import './styles.css'

library.add(faBook, faFolder, faFileAlt, faEnvelope, faQuestionCircle)

const Sidebar = () => {
  return (
    <div>Hello World</div>
  )
}

export default Sidebar
