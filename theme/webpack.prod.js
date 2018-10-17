const common = require('./webpack.common.js');
const merge = require('webpack-merge');

const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ReplaceInFileWebpackPlugin = require('replace-in-file-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(
	common,
	{
		mode: 'production',
		optimization: {
			minimizer: [
				new OptimizeCssAssetsPlugin(
					{
						cssProcessorOptions: {
							discardComments: {removeAll: true}
						}
					}
				),
				new UglifyJsPlugin()
			]
		},
		plugins: [
			new ReplaceInFileWebpackPlugin(
				[
					{
						dir: 'dist/templates',
						files: ['document_head.hbs'],
						rules: [
							{
								replace: 'var cfaRules = [{"fieldType":"tagger","field":360006076471,"value":"liferay_dxp_cloud","select":[360011715231,360011607612,360009953451],"formId":360000179191,"requireds":[]}];',
								search: 'var cfaRules = [{"fieldType":"priority","field":"priority","value":"high","select":[360010202512],"formId":360000077272,"requireds":[]},{"fieldType":"tagger","field":360006041192,"value":"prd_developer_tools","select":[360009385592],"formId":360000077272,"requireds":[]},{"fieldType":"tagger","field":360006041192,"value":"prd_enterprise_search","select":[360009385592],"formId":360000077272,"requireds":[]},{"fieldType":"tagger","field":360006041192,"value":"prd_liferay_commerce","select":[360011314571,360009385592],"formId":360000077272,"requireds":[]},{"fieldType":"tagger","field":360006041192,"value":"prd_liferay_dxp_7_0","select":[360011314571,360009385592],"formId":360000077272,"requireds":[]},{"fieldType":"tagger","field":360006041192,"value":"prd_liferay_dxp_7_1","select":[360011314571,360009385592],"formId":360000077272,"requireds":[]},{"fieldType":"tagger","field":360006041192,"value":"prd_liferay_dxp_cloud","select":[360011314571,360009385592],"formId":360000077272,"requireds":[]},{"fieldType":"tagger","field":360006041192,"value":"prd_liferay_portal_5_2","select":[360011314571,360009385592],"formId":360000077272,"requireds":[]},{"fieldType":"tagger","field":360006041192,"value":"prd_liferay_portal_6_0","select":[360011314571,360009385592],"formId":360000077272,"requireds":[]},{"fieldType":"tagger","field":360006041192,"value":"prd_liferay_portal_6_1","select":[360011314571,360009385592],"formId":360000077272,"requireds":[]},{"fieldType":"tagger","field":360006041192,"value":"prd_liferay_portal_6_2","select":[360011314571,360009385592],"formId":360000077272,"requireds":[]},{"fieldType":"tagger","field":360006041192,"value":"prd_management_tools_lcs","select":[360009385592],"formId":360000077272,"requireds":[]},{"fieldType":"tagger","field":360006041192,"value":"prd_mobile_device_detection","select":[360009385592],"formId":360000077272,"requireds":[]},{"fieldType":"tagger","field":360006041192,"value":"prd_mobile_experience","select":[360009385592],"formId":360000077272,"requireds":[]},{"fieldType":"tagger","field":360006041192,"value":"prd_productivity_tools_sync","select":[360009385592],"formId":360000077272,"requireds":[]},{"fieldType":"tagger","field":360006041192,"value":"prd_social_office","select":[360009385592],"formId":360000077272,"requireds":[]}];'
							}
						]
					},
					{
						dir: 'dist/templates',
						files: ['home_page.hbs'],
						rules: [
							{
								replace: '360000872551',
								search: '360000869112'
							},
							{
								replace: '360000813091',
								search: '360000860332'
							}
						]
					},
					{
						dir: 'dist/templates',
						files: ['new_request_page.hbs'],
						rules: [
							{
								replace: '360011506832',
								search: '360011314571'
							},
							{
								replace: '360006076471',
								search: '360006041192'
							}
						]
					},
					{
						dir: 'dist/templates/category_pages',
						files: ['liferay_analytics_cloud.hbs'],
						rules: [
							{
								replace: '360006943791',
								search: '360006610492'
							},
							{
								replace: '360012956951',
								search: '360015345972'
							},
							{
								replace: '360012436852',
								search: '360005556592'
							},
							{
								replace: '360006608732',
								search: '360004923432'
							},
							{
								replace: '360016141611',
								search: '360015347232'
							}
						]
					}
				]
			)
		]
	}
);