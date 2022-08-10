import React, { useState, useEffect } from "react";
import ButtonGroup from "../components/elements/ButtonGroup";
import Button from "../components/elements/Button";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import "../App.css";

import axios from "axios";
axios.defaults.withCredentials = true;
const url = "http://i7d203.p.ssafy.io:8080";

const Admin = () => {
	const editorRef = React.createRef();
	const [title, setTitle] = useState("");
	const [file, setFile] = useState("");
	const [category, setCategory] = useState("");
	const [monthMax, setMonthMax] = useState(0);
	const [monthMin, setMonthMin] = useState(0);
	const [weightMax, setWeightMax] = useState(0);
	const [weightMin, setWeightMin] = useState(0);

	const [categoryList, setCategoryList] = useState([]);

	useEffect(() => {
		axios.get(url + "/api/category").then((response) => {
			if (response.status == 200) {
				console.log("카테고리 정보 불러오기 성공");
				setCategoryList(response.data);
			} else {
				console.log("카테고리 정보를 받아오는데 실패했습니다.");
			}
		});

		axios.get(url + "/api/guide?category=건강").then((response) => {
			if (response.status == 200) {
				console.log("건강 카테고리 정보 불러오기 성공");
				console.log(response.data);
			} else {
				console.log(" 건강카테고리 정보를 받아오는데 실패했습니다.");
			}
		});
	}, []);

	console.log(categoryList);

	const handleChangeSelect = (e) => {
		setCategory(e.target.value);
	};

	const submit = () => {
		let content = editorRef.current.getInstance().getMarkdown();

		let formData = new FormData();

		formData.append("title", title);
		formData.append("thumbnail", file);
		formData.append("category", category);
		formData.append("content", content);
		formData.append("monthMax", monthMax);
		formData.append("monthMin", monthMin);
		formData.append("weightMax", weightMax);
		formData.append("weightMin", weightMin);

		axios
			.post(
				url + "/api/admin/guide",
				formData,
				{
					headers: { "Content-Type": "multipart/form-data" },
				}
				// { withCredentials: true }
			)
			.then((response) => {
				if (response.status == 200) {
					console.log("가이드 등록 성공");
					console.log(response);
				} else {
					console.log("가이드 등록에 실패했습니다.");
				}
			});
	};

	return (
		<section
			style={{
				marginTop: 200,
				// backgroundColor:
				// 	"red",
			}}
		>
			<div
				className="container-sm"
				style={
					{
						// backgroundColor:
						// 	"blue",
					}
				}
			>
				<h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
					<span className="text-color-primary">가이드</span>
					등록
				</h1>
				<div
					className="container-s"
					style={{
						// backgroundColor:
						// 	"black",
						width: "100%",
					}}
				>
					<div
						className="reveal-from-bottom"
						data-reveal-delay="600"
						style={{
							height: 400,
							// backgroundColor: "red",
						}}
					>
						<div>
							<input
								className="title-input"
								type="text"
								placeholder="제목"
								onChange={(e) => setTitle(e.target.value)}
								name="title"
							/>

							<select name="category" onChange={handleChangeSelect}>
								{categoryList.map((category) => (
									<option value={category}>{category}</option>
								))}
							</select>
						</div>
						<div>
							<input
								type="file"
								id="avatar"
								name="avatar"
								accept="image/png, image/jpeg"
								onChange={(e) => setFile(e.target.files[0])}
							></input>
						</div>
						<div>
							<input
								className="title-input"
								type="number"
								placeholder="monthMin"
								onChange={(e) => setMonthMin(e.target.value)}
								name="monthMin"
							/>
							<input
								className="title-input"
								type="number"
								placeholder="monthMax"
								onChange={(e) => setMonthMax(e.target.value)}
								name="monthMax"
							/>
						</div>
						<div>
							<input
								className="title-input"
								type="number"
								placeholder="weightMin"
								onChange={(e) => setWeightMin(e.target.value)}
								name="weightMin"
							/>
							<input
								className="title-input"
								type="number"
								placeholder="weightMax"
								onChange={(e) => setWeightMax(e.target.value)}
								name="weightMax"
							/>
						</div>
						<Editor
							placeholder="내용을 입력해주세요."
							previewStyle="vertical" // 미리보기 스타일 지정
							height="300px" // 에디터 창 높이
							initialEditType="wysiwyg" // 초기 입력모드 설정(디폴트 markdown)
							toolbarItems={[
								// 툴바 옵션 설정
								["heading", "bold", "italic", "strike"],
								["hr", "quote"],
								["ul", "ol", "task", "indent", "outdent"],
								["table", "image", "link"],
								["code", "codeblock"],
							]}
							ref={editorRef}
						></Editor>
					</div>
					<div
						className="reveal-from-bottom"
						data-reveal-delay="600"
						style={{
							marginTop: 50,
							justifyContent: "center",
							display: "flex",
						}}
					>
						<ButtonGroup>
							<Button tag="a" color="primary" wideMobile onClick={submit}>
								등록
							</Button>
							<Button
								tag="a"
								color="dark"
								wideMobile
								href="https://github.com/cruip/open-react-template/"
							>
								초기화
							</Button>
						</ButtonGroup>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Admin;
