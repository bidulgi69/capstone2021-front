import React from 'react';
import { GET_DATA, GET_USERS } from '../src/graphQL/quries'
import { City } from '../src/types'
import {NextRouter, useRouter} from "next/router";

type Props = {
    res: City[]
}

const Home: React.FunctionComponent<Props> = ({ res }) => {
    const router: NextRouter = useRouter()
    return (
        <div>
            <div style={{ backgroundColor: "green" }}>
                <p>
                    Apollo With NextJS
                </p>
                {
                    res && res.allCities && res.allCities.map(g => (
                        <div key={g.id}>
                            <span>
                                {g.name}
                            </span>
                            <br />
                            <span>
                                {g.population}
                            </span>
                        </div>
                    ))
                }
                <button style={{ width: '100pt', height: '100pt', backgroundColor: 'skyblue', borderRadius: '20pt', border: 0 }}
                        onClick={() => router.push('/login').then()}>
                    <span>힝구 ㅋ</span>
                </button>
            </div>
        </div>
    )
}

Home.getInitialProps = async ({ apolloClient }) => {
    const { loading, errors, data } = await apolloClient.query({ query: GET_DATA });
    return { res: data };
}
export default Home;