import React from 'react'
import BottomNavigation from "@material-ui/core/BottomNavigation";
import {makeStyles} from "@material-ui/styles";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const useStyles = makeStyles({
    footer: {
        height: '10%',
        marginTop: '2%'
    },
    euFlag: {
        maxHeight:'100px',
        paddingRight: '10px',
        align: 'left'
    },
    naiadesLogo: {
        maxHeight:'100px',
        paddingLeft: '10px',
        paddingRight: '10px',
    },
    secondaryFooter: {
        height: '2%',
        backgroundColor:'#333',
        color: 'white',
        display: 'flex',
        alignItems: 'center'
    },
    a: {
        color:'inherit',
        textDecoration: 'none'
    }
});

export default function Footer (props){
    const classes = useStyles();

    return (
        <>
            <BottomNavigation className={classes.footer}>
                <img alt={'naiades project eu flag'}
                     className={classes.euFlag}
                     src={"eu_flag_0.jpg"}
                ></img>
                <p className={'text-align-left'}>
                    This project has received funding from the European Union's Horizon 2020 research and innovation
                    programme under grant agreement No.&nbsp;H2020-SC5-2018-2019-2020
                </p>
                <a href={'https://naiades-project.eu/'}
                   target={'_blank'}>
                    <img alt={'naiades project logo'}
                         className={classes.naiadesLogo}
                         src={"naiades_logo.png"}
                    />
                </a>

            </BottomNavigation>
            <BottomNavigation className={classes.secondaryFooter}>
                <FavoriteBorderIcon />
                <p>Powered and Supported by <a className={classes.a} href={'https://eurecat.org/'}>EURECAT TECHNOLOGY CENTER</a></p>
            </BottomNavigation>
        </>
    )

}
