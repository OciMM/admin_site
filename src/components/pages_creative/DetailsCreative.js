import { Container, Grid, Toolbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import '/Storisbro/admin_site/src/styles/Main.css'

export default function DetailsCreative() {
    const {id} = useParams();
    
  return (
    <main>
        <Container maxWidth="lg">
            <Grid container>
                <Grid item lg={12} md={12} xs={12}>
                    <div className="Main-root">
                        <div className="High-root">
                            <Toolbar>
                                <Link to={`http://localhost:3000/creatives/${id}`}><ArrowBackIcon color="warning" fontSize="large" /></Link>
                                <Typography variant="h3" textAlign="center">Креатив "{id}"</Typography>
                            </Toolbar>
                        </div>
                        
                        <div className="Middle-detail-root">
                            {/* надо импортировать какую то тестовую информацию для плеере */}
                            <Grid mt={3} container textAlign="center" justifyContent="center">
                                <Grid item lg={3}>
                                    <div className="user-button">
                                        <Typography pt={2} pb={2} variant="h5">Посмотреть</Typography>
                                    </div>
                                </Grid>
                            </Grid>

                            <Grid mt={3} mb={3} container textAlign="center" justifyContent="center">
                                <Grid item lg={4}>
                                    <div className="user-button">
                                        <Typography pt={2} pb={2} variant="h5">https://vk.com/write-117711644</Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Container>
    </main>
  )
}
