export default function(pageName: string, prefix?: string) {
	return `
import { defineMessages } from 'react-intl';

// id prefix: ${prefix}.${pageName}
export default defineMessages({

});
	`.trim()
}