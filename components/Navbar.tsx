import { checkUser } from '@/lib/checkuser'

import React from 'react'

export default function Navbar() {
  const user = checkUser();
  return (
    <div>Navbar</div>
  )
}
