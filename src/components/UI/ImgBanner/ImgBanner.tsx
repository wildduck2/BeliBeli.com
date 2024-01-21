import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/context/store";

import { Link, Skeleton } from "../../UI";
import { AsyncImage } from "../../Layouts";

interface ImgBannerProps {
	dataIndex: number;
}

const ImgBanner: React.FC<ImgBannerProps> = ({ dataIndex }) => {
	const selector = useSelector((state: RootState) => state.data);

	return (
		<div className="img-banner">
			{selector.satatus === "succeeded" ? (
				<>
					<AsyncImage
						media="(min-width: 500px)"
						src={selector.bannersData![dataIndex].mobile_top_img}
						srcSet={selector.bannersData![dataIndex].top_img}
						width={275}
						height={387}
						className="img-banner__img"
						ariaLabel="banner img for new season"
					/>

					<div className="img-banner__layout" aria-hidden="true"></div>

					<div className="img-banner__info">
						<h2>{selector.bannersData![dataIndex].title}</h2>
						<p>{selector.bannersData![dataIndex].subtitle}</p>

						<div>
							{selector.bannersData![dataIndex].button?.map((btn, index) => {
								return (
									<Link
										className="img-banner__button"
										key={index}
										href={btn}
									>
										{btn}
									</Link>
								);
							})}
						</div>
					</div>
				</>
			) : (
				<>
					<Skeleton className="img-banner__skeleton" aria-hidden="true" />
				</>
			)}
		</div>
	);
};

ImgBanner.displayName = "ImgBanner";

export default ImgBanner;
