import React from 'react';
import { NextRouter, useRouter } from "next/router";
import { Button, makeStyles, Tab, Tabs } from "@material-ui/core";
import Cookies from 'js-cookie'
import { GET_USER_DETAIL } from "../src/graphQL/quries";
import { User } from "../src/types";
import {useQuery} from "@apollo/client";
import { Loading, Error, UserAccordion } from "../src/components";

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

type Props = {

}

const Home = ({ }: Props) => {
    const router: NextRouter = useRouter()
    const classes = useStyles();
    const [ value, setValue ] = React.useState<number>(0);

    const { loading, error, data } = useQuery(GET_USER_DETAIL, { fetchPolicy: 'network-only' });
    if (loading) return <Loading />;
    if (error) return <Error msg={error.message} />;

    // @ts-ignore
    return (
        <React.Fragment>
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '100vh', alignItems: 'center', paddingRight: '16pt', marginTop: '16pt' }}>
                <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', width: '252px', border: '3pt' }}>
                    <Tabs
                        style={{ width: '100%' }}
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={(e, newValue: number) => setValue(newValue)}
                        aria-label="Vertical tabs example"
                        className={classes.tabs}
                    >
                        <Tab label="Dashboard" {...a11yProps(0)} />
                        <Tab label="Hub" {...a11yProps(1)} />
                        <Tab label="Report" {...a11yProps(2)} />
                    </Tabs>
                </div>
                <div style={{ marginLeft: '50pt', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', width: '100%' }}>
                    <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-end' }}>
                        {
                            data?.user ?
                                <React.Fragment>
                                    <UserAccordion authority={data?.user.authority} />
                                </React.Fragment>
                                :
                                <Button style={{ width: '70pt', height: '40pt', background: '#FFE94A 0% 0% no-repeat padding-box', borderRadius: '10pt', border: 0, cursor: 'pointer' }}
                                        onClick={() => router.push('/login').then()}>
                                    <span style={{ fontSize: '12pt', fontWeight: 'bold' }}>
                                        Login
                                    </span>
                                </Button>
                        }
                    </div>
                    {
                        value === 0 && <span>Dashboard</span>
                    }
                    {
                        value === 1 && <span>Hub</span>
                    }
                    {
                        value === 2 && <span>Report</span>
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export const getServerSideProps = async ({ apolloClient }) => {
    return { props: { } };
}

export default Home;