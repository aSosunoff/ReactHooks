import React, { useContext, useEffect } from "react";
import { GithubContext } from "../context/Github/context";
import { Link } from "react-router-dom";

export default ({ match }) => {
	const urlName = match.params.name;
	const { getUser, getRepos, loading, user, repos } = useContext(GithubContext);

	useEffect(() => {
		getUser(urlName);
		getRepos(urlName);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (loading) {
		return <p className="text-center">Загрузка</p>;
	}

	const {
		name,
		company,
		avatar_url,
		location,
		bio,
		blog,
		login,
		html_url,
		followers,
		following,
		pablic_repos,
		public_gists,
	} = user;

	return (
		<>
			<Link to="/" className="btn btn-link">
				На главную
			</Link>

			<div className="card mb-4">
				<div className="card-body">
					<div className="row">
						<div className="col-sm-3 text-center">
							<img src={avatar_url} alt={name} style={{ width: "150px" }} />
							<h1>{name}</h1>
							{location && <p>Местоположение: {location}</p>}
						</div>
						<div className="col">
							{bio && (
								<>
									<h3>BIO</h3>
									<p>{bio}</p>
								</>
							)}
							<a
								href={html_url}
								className="btn btn-dark"
								target="_blank"
								rel="noopener noreferrer"
							>
								Открыть профиль
							</a>
							<ul>
								{login && (
									<li>
										<strong>Username: {login}</strong>
									</li>
								)}
								{company && (
									<li>
										<strong>Компания: {company}</strong>
									</li>
								)}
								{blog && (
									<li>
										<strong>Website: {blog}</strong>
									</li>
								)}
							</ul>
							<div className="badge badge-primary">Подписчики: {followers}</div>
							<div className="badge badge-info">Подписан: {following}</div>
							<div className="badge badge-success">
								Репозитории: {pablic_repos}
							</div>
							<div className="badge badge-secondary">Gists: {public_gists}</div>
						</div>
					</div>
                    {JSON.stringify(repos)}
				</div>
			</div>
		</>
	);
};
