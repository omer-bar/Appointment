import React from "react";
import { withStyles } from "@material-ui/styles";

import styles from "./styles/FooterStyles.js";

function Footer(props) {
	const { classes } = props;
	return (
		<div className={classes.HeightEmulator}>
			<footer className={classes.FooterSection}>
				<div className={classes.ptb_100}>
					<div className="container">
						<div className="row">
							<div className="col-12 col-sm-6 col-lg-3">
								<div className="footer-items">
									<a href="/#">
										<img
											className={classes.NavbarBrand}
											alt="logo"
											src="/assets/blue_appointment_icon.svg"
										/>
									</a>
									<p className="mt-2 mb-3">
										Lorem ipsum dolor sit amet, consectetur
										adeipisicing elit. Quis non, fugit totam
										vel laboriosam vitae.
									</p>
									<div className={classes.SocialIcons}>
										<a
											href="/#"
											className={classes.FacebookIcon}>
											<svg
												className=""
												aria-hidden="true"
												focusable="false"
												data-prefix="fab"
												data-icon="facebook-f"
												role="img"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 320 512"
												data-fa-i2svg="">
												<path
													fill="currentColor"
													d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
											</svg>
											<svg
												className=""
												aria-hidden="true"
												focusable="false"
												data-prefix="fab"
												data-icon="facebook-f"
												role="img"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 320 512"
												data-fa-i2svg="">
												<path
													fill="currentColor"
													d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
											</svg>
										</a>
										<a
											href="/#"
											className={classes.TwitterIcon}>
											<svg
												className="svg-inline--fa fa-twitter fa-w-16"
												aria-hidden="true"
												focusable="false"
												data-prefix="fab"
												data-icon="twitter"
												role="img"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 512 512"
												data-fa-i2svg="">
												<path
													fill="currentColor"
													d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
											</svg>
											<svg
												className="svg-inline--fa fa-twitter fa-w-16"
												aria-hidden="true"
												focusable="false"
												data-prefix="fab"
												data-icon="twitter"
												role="img"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 512 512"
												data-fa-i2svg="">
												<path
													fill="currentColor"
													d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
											</svg>
										</a>
										<a
											href="/#"
											className={classes.GooglePlusIcon}>
											<svg
												className="svg-inline--fa fa-google-plus-g fa-w-20"
												aria-hidden="true"
												focusable="false"
												data-prefix="fab"
												data-icon="google-plus-g"
												role="img"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 640 512"
												data-fa-i2svg="">
												<path
													fill="currentColor"
													d="M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z"></path>
											</svg>
											<svg
												className="svg-inline--fa fa-google-plus-g fa-w-20"
												aria-hidden="true"
												focusable="false"
												data-prefix="fab"
												data-icon="google-plus-g"
												role="img"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 640 512"
												data-fa-i2svg="">
												<path
													fill="currentColor"
													d="M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z"></path>
											</svg>
										</a>
									</div>
								</div>
							</div>
							<div className="col-12 col-sm-6 col-lg-3">
								<div>
									<h3 className="footer-title mb-2">
										Useful Links
									</h3>
									<ul>
										<li className="py-2">
											<a href="/#">Home</a>
										</li>
										<li className="py-2">
											<a href="/#">About Us</a>
										</li>
										<li className="py-2">
											<a href="/#">Services</a>
										</li>
										<li className="py-2">
											<a href="/#">Blog</a>
										</li>
										<li className="py-2">
											<a href="/#">Contact</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-12 col-sm-6 col-lg-3">
								<div>
									<h3 className="footer-title mb-2">
										Product Help
									</h3>
									<ul>
										<li className="py-2">
											<a href="/#">FAQ</a>
										</li>
										<li className="py-2">
											<a href="/#">Privacy Policy</a>
										</li>
										<li className="py-2">
											<a href="/#">Support</a>
										</li>
										<li className="py-2">
											<a href="/#">Terms & Conditions</a>
										</li>
										<li className="py-2">
											<a href="/#">Contact</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-12 col-sm-6 col-lg-3">
								<div className="footer-items">
									<h3 className="footer-title mb-2">
										Download
									</h3>
									<div className="d-flex flex-wrap">
										<a href="/#">
											<img
												src="/assets/GooglePlayButton.png"
												alt=""
												style={{
													height: "50px",
													width: "170px",
												}}
											/>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-bottom">
					<div className="container">
						<div className="row">
							<div className="col-12"></div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default withStyles(styles)(Footer);
