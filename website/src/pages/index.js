import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React from "react";
import { LitmusDocsThemeProvider, SectionDark, SectionLight } from '../components/layout';
import { ExploreLitmus, Header } from '../components/section/Home';
import { GetStartedHeader } from '../components/section/Home/GetStartedHeader';
import { MoreResources } from '../components/section/Home/MoreResources';


export default function Home() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout
			title={`Hello from ${siteConfig.title}`}
			description="Description will go into a meta tag in <head />">			
			<main>
				<LitmusDocsThemeProvider>
				{/* Pages Components */}
				<div className="homeMainContent">
					<SectionLight>
						<Header />
						<br />
						<GetStartedHeader />
						<br />
						<ExploreLitmus type={'basic'} />					
						<ExploreLitmus type={'advance'} />					
						<br />
					</SectionLight>
					<SectionDark>
						<MoreResources />
					</SectionDark>
				</div>
				</LitmusDocsThemeProvider>
			</main>
		</Layout>
	);
}
