import React from 'react'
import { SwiperSmall } from "../../Layouts";
import { useSelector } from "react-redux";
import { Link } from '../../UI'
import { RootState } from "../../../context/store";

const StyledByYouWrapper = () => {
    const products = useSelector((state: RootState) => state.data.products);

    return (
        <>

            <div className="styledByYou__section__header">
                <h3>Styled by you</h3>
                <p>
                    We love to see how you style your favourites from BeliBeli: Keep
                    sharing your personal style with @BeliBeli and #BeliBelixME for a
                    chance to be featured at hm.com, in our marketing materials and in
                    our stores.
                </p>

                <Link href={`/BeliBeli`}>Visit BeliBeli</Link>
            </div>

            <div className="styledByYou__section__content">
                <SwiperSmall
                    FILTER__QUERY="styledbyyou"
                    DATA__NAME={products}
                />
            </div>
        </>
    )
}


export default StyledByYouWrapper
