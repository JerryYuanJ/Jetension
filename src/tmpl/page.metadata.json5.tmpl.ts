export default function(pageName: string) {
	return `
{
	"$schema": "TODO",
	"jutro": "8.3.0",
	"pageContent" : {
		"id": "${pageName}",
		"type": "page",
		"content": [{
			"id": "${pageName}PageContainer",
			"component": "div",
			"type": "container",
			"componentProps": {
				"className": "${pageName}PageContainer"
			},
			"content": []
		}]
	}
}
	`.trim()
}