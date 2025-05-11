import { Button, Drawer, Tooltip } from 'antd';
import React, { useState } from 'react'

export const NavBurger = ({ handleChangePage, selectPage }) => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Button className='fixed top-5 left-5 bg-transparent p-4 text-center bg-pinkAccent border-none text-white text-2xl' ov onClick={showDrawer}>
            ▨ {/* ⨳▨▤⊨⊫⊪⊭⊮⋛⋙⋘⋢⋥⌗⌗⒑⨌⨝⨠⨴⨵⨱⨫⨨⨥⨩⨬⨨⨧⨤⨤⨚⨗⨚⨝⩎⩩⩸⩻⩴⩱⩰⩭⩮ */}
            </Button>
            <Drawer width={400} style={{
                backgroundColor: 'rgba(0,0,0,0.9)'
            }} onClose={onClose} open={open}>
                <p
                    className=" text-center block py-2.5 text-3xl cursor-pointer lg:px-4 rounded transition duration-200 text-pinkAccent"
                >
                    ௹
                </p>
                <nav className='text-white flex flex-col'>
                        <p
                            onClick={() => {
                                handleChangePage('#about-me')
                                onClose()
                            }}
                            className={`${(selectPage === '#about-me' || selectPage === '') && 'text-pinkAccent'} text-center flex flex-col py-2.5 text-2xl cursor-pointer px-4 rounded transition duration-200 hover:text-pinkAccent`}
                        >
                            ⁜
                            <span className='text-xl'>Sobre mi</span>
                        </p>
                        <p
                            onClick={() => {
                                handleChangePage('#experience')
                                onClose()
                            }}
                            className={`${selectPage === '#experience' && 'text-pinkAccent'} text-center flex flex-col py-2.5 text-2xl cursor-pointer px-4 rounded transition duration-200 hover:text-pinkAccent`}
                        >
                            ÷
                            <span className='text-xl'>Experiencia</span>
                        </p>
                        <p
                            onClick={() => {
                                handleChangePage('#studies')
                                onClose()
                            }}
                            className={`${selectPage === '#studies' && 'text-pinkAccent'} text-center flex flex-col py-2.5 text-2xl cursor-pointer px-4 rounded transition duration-200 hover:text-pinkAccent`}
                        >
                            ℗
                            <span className='text-xl'>Estudios</span>
                        </p>
                </nav>
            </Drawer>
        </>
    );
};
