export default function(pageName: string) {
	return `
import React from "react";
import { MetadataForm } from "@jutro/uiconfig";
import styles from "./${pageName}.module.scss";
import messages from "./${pageName}.messages.js";
import metadata from "./${pageName}.metadata.json5";

function ${pageName}() {

	const callbackMap = {};

	const componentMap = {};

	const overrideProps = {};

	return (
		<MetadataForm
			uiProps={metadata.pageContent}
			callbackMap={callbackMap}
			componentMap={componentMap}
			overrideProps={overrideProps}
			classNameMap={styles}
		/>
	)
}

export default ${pageName};
	`.trim()
}