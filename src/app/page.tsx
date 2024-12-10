import Image from "next/image";

export default function Home() {
	return (
		<>
			<section className=" cover-page section-padding-y">
				<div className="container">
					<div className="title">
						<input
							type="text"
							placeholder="title of the project"
							className="main-heading"
						/>
					</div>
					<div className="tu-logo py-6 ">
						<Image
							src={"/tu-logo.png"}
							alt=""
							width={192}
							height={165}
							className="mx-auto"
						/>
					</div>
					<div className="submitted-to-info text-center mb-8">
						<h2 className="heading uppercase">
							A PROJECT WORK SUBMITTED TO THE
						</h2>
						<h2 className="heading heading-bold">
							Department of IOST Madan Bhandari Memorial College INSTITUTE OF
							SCIENCE AND TECHNOLOGY TRIBHUVAN UNIVERSITY NEPAL
						</h2>
					</div>

					<div className="award-title-wrapper text-center mb-4">
						<label className="heading heading-bold">
							For the award of <br /> bachelor of science (B.Sc.) in
							<input
								type="text"
								placeholder="CSIT"
								className="heading heading-bold"
							/>
						</label>
					</div>

					<div className="student-info text-center ">
						<h2 className="heading">By</h2>
						<input
							type="text"
							placeholder="Full Name of the student"
							className="heading heading-bold"
						/>
						<input
							type="text"
							placeholder="Symbol Number"
							className="heading heading-bold"
						/>
						<input
							type="text"
							placeholder="Tu Registration Number"
							className="heading heading-bold"
						/>
					</div>

					<div className="date mt-8">
						<input
							type="text"
							placeholder="Month, Year"
							className="heading heading-bold"
						/>
					</div>
				</div>
			</section>

			<section className=" section-padding-y recommendation">
				<div className="container">
					<div className="content-box mb-24">
						<h1 className="main-heading mb-12">Recommendation</h1>

						<p>
							This is to recommend that
							<input
								type="text"
								placeholder="… (Name of student, bold faced
 letter)……"
								className="inline w-auto sub-heading"
							/>
							,
							<input
								type="text"
								placeholder="(Symbol No…… , T.U.
Registration No……)"
								className="inline w-auto"
							/>
							, has carried out project work entitled “
							<input
								type="text"
								placeholder="…..(Title, bold faced letter)……"
								className="inline w-auto"
							/>
							.” for the requirement to the project work in Bachelor of Science
							(B.Sc.) degree in …(Name of subject)………… under my/our supervision
							in the Department of
							<input
								type="text"
								placeholder=" …… (Name of department)……"
								className=""
							/>
							,
							<input
								type="text"
								placeholder="…(Name of Campus/Institute)… Campus"
								className=""
							/>
							, Institute of Science and Technology (IoST), Tribhuvan University
							(T.U.), Nepal.
						</p>
						<p>
							To my/our knowledge, this work has not been submitted for any
							other degree.
						</p>
						<p>
							He/She has fulfilled all the requirements laid down by the
							Institute of Science and Technology (IoST), Tribhuvan University
							(T.U.), Nepal for the submission of the project work for the
							partial fulfillment of Bachelor of Science (B.Sc.) degree.
						</p>
					</div>

					<div className="signature-box max-w-[45%] mb-6">
						<p className="text-left">
							............................................
						</p>
						<div className="box text-left">
							<input
								type="text"
								className="border-b-[1px] border-dashed px-0 py-2 sub-heading"
								placeholder="Name"
							/>
							<strong className="block">Supervisor</strong>
							<div className="input-field">
								<label htmlFor="">
									Department:
									<input
										type="text"
										className="border-b-[1px] border-dashed px-0 py-2  ml-1"
										placeholder="Name"
									/>
								</label>
							</div>
							<div className="input-field">
								<label htmlFor="">
									Campus/Institute:
									<input
										type="text"
										className="border-b-[1px] border-dashed px-0 py-2  ml-1"
										placeholder="Name"
									/>
								</label>
							</div>
							<div className="input-field">
								<label htmlFor="">
									University:
									<input
										type="text"
										className="border-b-[1px] border-dashed px-0 py-2  ml-1"
										placeholder="Name"
									/>
								</label>
							</div>
						</div>
					</div>
					<div className="signature-box max-w-[45%]">
						<p className="text-left">
							............................................
						</p>
						<div className="box text-left">
							<input
								type="text"
								className="border-b-[1px] border-dashed px-0 py-2 sub-heading"
								placeholder="Name"
							/>
							<strong className="block">Supervisor</strong>
							<div className="input-field">
								<label htmlFor="">
									Department:
									<input
										type="text"
										className="border-b-[1px] border-dashed px-0 py-2  ml-1"
										placeholder="Name"
									/>
								</label>
							</div>
							<div className="input-field">
								<label htmlFor="">
									Campus/Institute:
									<input
										type="text"
										className="border-b-[1px] border-dashed px-0 py-2  ml-1"
										placeholder="Name"
									/>
								</label>
							</div>
							<div className="input-field">
								<label htmlFor="">
									University:
									<input
										type="text"
										className="border-b-[1px] border-dashed px-0 py-2  ml-1"
										placeholder="Name"
									/>
								</label>
							</div>
						</div>
					</div>

					<div className="date mt-8">
						<input
							type="text"
							placeholder="Day, Month, Year"
							className="heading heading-bold"
						/>
					</div>
				</div>
			</section>

			<section className=" section-padding-y declaration">
				<div className="container">
					<div className="content-box mb-24">
						<h1 className="main-heading mb-12">DECLARATION</h1>

						<p>
							This project work entitled “
							<input
								type="text"
								placeholder="… (Title, bold faced letter) …."
								className="inline w-auto sub-heading"
							/>
							.” is being submitted to the Department of
							<input
								type="text"
								placeholder="… (Name of	department)…"
								className="inline w-auto"
							/>
							.,
							<input
								type="text"
								className="inline w-auto"
								placeholder="…(Name of Campus)……"
							/>
							, Institute of Science and Technology (IoST), Tribhuvan University
							(T.U.), Nepal for the partial fulfillment of the requirement to
							the project work in Bachelor of Science (B.Sc.) degree in
							<input
								type="text"
								placeholder="…(Name of subject)…"
								className=""
							/>
							. This project work is carried out by me under the supervision of
							<input
								type="text"
								placeholder="….(Name of supervisor)……"
								className=""
							/>
							and co-supervision of …..(Name of co- supervisor)…… in the
							Department of
							<input
								type="text"
								placeholder="…… (Name of department)……"
								className=""
							/>
							,
							<input
								type="text"
								placeholder="… (Name of Campus/Institute) ……"
								className=""
							/>
							Campus, Institute of Science and Technology (IoST), Tribhuvan
							University (T.U.), Nepal.
						</p>
						<p>
							This work is original and has not been submitted earlier in part
							or full in this or any other form to any university or institute,
							here or elsewhere, for the award of any degree.
						</p>
					</div>

					<div className="signature-box max-w-[45%] mb-6 ml-auto">
						<div className="box text-right">
							<input
								type="text"
								className="border-b-[1px] border-dashed px-0 py-2  text-right"
								placeholder="Name"
							/>
							<span>Signature</span>
							<div className="input-field">
								<label htmlFor="">
									<input
										type="text"
										className="border-b-[1px] border-dashed px-0 py-2  text-right"
										placeholder="Name Of Student"
									/>
								</label>
							</div>
							<div className="input-field">
								<label htmlFor="">
									<input
										type="text"
										className="border-b-[1px] border-dashed px-0 py-2  text-right"
										placeholder="Symbol No."
									/>
								</label>
							</div>
							<div className="input-field">
								<label htmlFor="">
									<input
										type="text"
										className="border-b-[1px] border-dashed px-0 py-2  text-right"
										placeholder="T.U. Registration No."
									/>
								</label>
							</div>
						</div>
					</div>

					<div className="date mt-8">
						<input
							type="text"
							placeholder="Day, Month, Year"
							className="heading heading-bold"
						/>
					</div>
				</div>
			</section>

			<section className=" section-padding-y declaration">
				<div className="container">
					<div className="content-box mb-24">
						<h1 className="main-heading mb-12">Letter Of Forward</h1>
						<p className="text-left">
							Date:
							<input
								type="text"
								placeholder="[Day/Month/Year]"
								className="text-left ml-0"
							/>
						</p>
						<p>
							On the recommendation of
							<input
								type="text"
								placeholder="…… (name of supervisor, bold faced
							letter) …."
								className="sub-heading"
							/>
							. and
							<input
								type="text"
								placeholder="…… (name of co- supervisor, bold faced letter) …."
								className="sub-heading"
							/>
							., this project work is submitted by
							<input
								type="text"
								placeholder="…… (name of student)…."
								className="sub-heading"
							/>
							,<input type="text" placeholder=" Symbol No. …." />
							., T.U. <input type="text" placeholder="Registration No……." />,
							entitled "
							<input
								type="text"
								className="sub-heading"
								placeholder="…….(title, in bold faced letter)……."
							/>
							" is forwarded by the Department of
							<input type="text" placeholder=" … (Name of department)……" />,
							<input type="text" placeholder="…(Name of Campus)…." />
							.Campus, for the approval to the Evaluation Committee, Institute
							of Science and Technology (IoST), Tribhuvan University (T.U.),
							Nepal.
						</p>
						<p>
							He/She has fulfilled all the requirements laid down by the
							Institute of Science and Technology (IoST), Tribhuvan University
							(T.U.), Nepal for the project work.
						</p>
					</div>

					<div className="signature-box max-w-[45%] mb-6 ml-auto">
						<div className="box text-right">
							<input
								type="text"
								className="border-b-[1px] border-dashed px-0 py-2  text-right"
								placeholder="Name"
							/>
							<span>Signature</span>
							<div className="input-field">
								<label htmlFor="">
									<input
										type="text"
										className="border-b-[1px] border-dashed px-0 py-2  text-right"
										placeholder="Name Of Student"
									/>
								</label>
							</div>
							<div className="input-field">
								<label htmlFor="">
									<input
										type="text"
										className="border-b-[1px] border-dashed px-0 py-2  text-right"
										placeholder="Symbol No."
									/>
								</label>
							</div>
							<div className="input-field">
								<label htmlFor="">
									<input
										type="text"
										className="border-b-[1px] border-dashed px-0 py-2  text-right"
										placeholder="T.U. Registration No."
									/>
								</label>
							</div>
						</div>
					</div>

					<div className="date mt-8">
						<input
							type="text"
							placeholder="Day, Month, Year"
							className="heading heading-bold"
						/>
					</div>
				</div>
			</section>

			<section className=" section-padding-y declaration">
				<div className="container">
					<div className="content-box mb-24">
						<h1 className="main-heading mb-12">Certificate Of Approval</h1>

						<p>
							This project work entitled “
							<input
								type="text"
								placeholder="…(Title, bold faced
							letter)…."
								className="sub-heading"
							/>
							” by <input type="text" placeholder="…(Name of student)…" /> ({" "}
							<input
								type="text"
								placeholder="Symbol No………and T.U. Registration No………………….."
							/>
							) under the supervision of{" "}
							<input type="text" placeholder="….(Name of supervisor)……" /> and
							co-supervision of{" "}
							<input type="text" placeholder="…..(Name of co-supervisor)……" />{" "}
							in the Department of{" "}
							<input type="text" placeholder="……(Name of department)…." />,
							<input type="text" placeholder="-…(Name of Campus)…." />,
							Institute of Science and Technology (IoST), Tribhuvan University
							(T.U.), is hereby submitted for the partial fulfillment of the
							Bachelor of Science (B.Sc.) degree in{" "}
							<input type="text" placeholder="…(Name of subject)…" />. This
							report has been accepted and forwarded to the Controller of
							Examination, Institute of Science and Technology, Tribhuvan
							University, Nepal for the legal procedure.
						</p>
					</div>

					<div className="grid grid-cols-2 justify-between">
						<div className="col-span-1">
							<div className="signature-box">
								<p className="text-left">
									............................................
								</p>
								<div className="box text-left">
									<input
										type="text"
										className="border-b-[1px] border-dashed px-0 py-2 sub-heading"
										placeholder="Name"
									/>
									<strong className="block">Supervisor</strong>
									<div className="input-field">
										<label htmlFor="">
											Department:
											<input
												type="text"
												className="border-b-[1px] border-dashed px-0 py-2  ml-1"
												placeholder="Name"
											/>
										</label>
									</div>
									<div className="input-field">
										<label htmlFor="">
											Campus/Institute:
											<input
												type="text"
												className="border-b-[1px] border-dashed px-0 py-2  ml-1"
												placeholder="Name"
											/>
										</label>
									</div>
									<div className="input-field">
										<label htmlFor="">
											University:
											<input
												type="text"
												className="border-b-[1px] border-dashed px-0 py-2  ml-1"
												placeholder="Name"
											/>
										</label>
									</div>
								</div>
							</div>
						</div>
						<div className="col-span-1">
							<div className="signature-box">
								<p className="text-left">
									............................................
								</p>
								<div className="box text-left">
									<input
										type="text"
										className="border-b-[1px] border-dashed px-0 py-2 sub-heading"
										placeholder="Name"
									/>
									<strong className="block">External Examiner</strong>
									<div className="input-field">
										<label htmlFor="">
											Department:
											<input
												type="text"
												className="border-b-[1px] border-dashed px-0 py-2  ml-1"
												placeholder="Name"
											/>
										</label>
									</div>
									<div className="input-field">
										<label htmlFor="">
											Campus/Institute:
											<input
												type="text"
												className="border-b-[1px] border-dashed px-0 py-2  ml-1"
												placeholder="Name"
											/>
										</label>
									</div>
									<div className="input-field">
										<label htmlFor="">
											University:
											<input
												type="text"
												className="border-b-[1px] border-dashed px-0 py-2  ml-1"
												placeholder="Name"
											/>
										</label>
									</div>
								</div>
							</div>
						</div>
						<div className="col-span-1">
							<div className="signature-box">
								<p className="text-left">
									............................................
								</p>
								<div className="box text-left">
									<input
										type="text"
										className="border-b-[1px] border-dashed px-0 py-2 sub-heading"
										placeholder="Name"
									/>
									<strong className="block">Internal Examiner</strong>
									<div className="input-field">
										<label htmlFor="">
											Department:
											<input
												type="text"
												className="border-b-[1px] border-dashed px-0 py-2  ml-1"
												placeholder="Name"
											/>
										</label>
									</div>
									<div className="input-field">
										<label htmlFor="">
											Campus/Institute:
											<input
												type="text"
												className="border-b-[1px] border-dashed px-0 py-2  ml-1"
												placeholder="Name"
											/>
										</label>
									</div>
									<div className="input-field">
										<label htmlFor="">
											University:
											<input
												type="text"
												className="border-b-[1px] border-dashed px-0 py-2  ml-1"
												placeholder="Name"
											/>
										</label>
									</div>
								</div>
							</div>
						</div>
						<div className="col-span-1">
							<div className="signature-box">
								<p className="text-left">
									............................................
								</p>
								<div className="box text-left">
									<input
										type="text"
										className="border-b-[1px] border-dashed px-0 py-2 sub-heading"
										placeholder="Name"
									/>
									<strong className="block">Head of Department</strong>
									<div className="input-field">
										<label htmlFor="">
											Department:
											<input
												type="text"
												className="border-b-[1px] border-dashed px-0 py-2  ml-1"
												placeholder="Name"
											/>
										</label>
									</div>
									<div className="input-field">
										<label htmlFor="">
											Campus/Institute:
											<input
												type="text"
												className="border-b-[1px] border-dashed px-0 py-2  ml-1"
												placeholder="Name"
											/>
										</label>
									</div>
									<div className="input-field">
										<label htmlFor="">
											University:
											<input
												type="text"
												className="border-b-[1px] border-dashed px-0 py-2  ml-1"
												placeholder="Name"
											/>
										</label>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="date mt-8">
						<input
							type="text"
							placeholder="Day, Month, Year"
							className="heading heading-bold"
						/>
					</div>
				</div>
			</section>

			<section className=" section-padding-y acknowledgement">
				<div className="container">
					<h1 className="main-heading mb-12">Acknowledgement</h1>

					<textarea
						name=""
						id=""
						placeholder="Not more than 2 pages, write in justified form"
						rows={30}
						className="w-full border-[1px] px-2 py-4"></textarea>
				</div>
			</section>
			<section className=" section-padding-y acknowledgement">
				<div className="container">
					<h1 className="main-heading mb-12">Abstract</h1>

					<textarea
						name=""
						id=""
						placeholder="preferable within a page"
						rows={30}
						className="w-full border-[1px] px-2 py-4"></textarea>
				</div>
			</section>
			<section className=" section-padding-y acknowledgement">
				<div className="container">
					<h1 className="main-heading mb-12">
						LIST OF ACRONYMS AND ABBREVIATIONS
					</h1>
				</div>
			</section>
			<section className=" section-padding-y acknowledgement">
				<div className="container">
					<h1 className="main-heading mb-12">LIST OF symbols</h1>
				</div>
			</section>
			<section className=" section-padding-y acknowledgement">
				<div className="container">
					<h1 className="main-heading mb-12">LIST OF tables</h1>
				</div>
			</section>
			<section className=" section-padding-y acknowledgement">
				<div className="container">
					<h1 className="main-heading mb-12">LIST OF Figures</h1>
				</div>
			</section>
			<section className=" section-padding-y acknowledgement">
				<div className="container">
					<h1 className="main-heading mb-12">Table Of Content</h1>
				</div>
			</section>
		</>
	);
}
