import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

//import icons
import { MdNotifiactions } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";




//internal import
import style from "./navbar.module.css"
import { discover, helpcenter, notification, profile, sidebar } from './index';
import { button } from '../componentindex';
const navbar = () => {
  return (
    <div>navbar</div>
  )
}

export default navbar