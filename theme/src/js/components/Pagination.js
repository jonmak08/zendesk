import preact from 'preact';
import PropTypes from 'prop-types';

import times from 'lodash.times';

const PAGE_BUFFER = 5;

class PaginationItem extends preact.Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		const {onClick, number} = this.props;

		onClick(number);
	}

	render({active, label, number}) {
		return (
			<li class={active ? 'pagination-current' : ''}>
				{!active && (
					<button class="btn-unstyled" onClick={this.handleClick} type="button" value={number}>
						{label}
					</button>
				)}

				{active && (
					<span>{label}</span>
				)}
			</li>
		);
	}
}

PaginationItem.PropTypes = {
	active: PropTypes.bool,
	label: PropTypes.oneOfType(
		[PropTypes.number, PropTypes.string]
		),
	onClick: PropTypes.func.isRequired,
	number: PropTypes.number
};

class Pagination extends preact.Component {
	constructor(props) {
		super(props);

		this.getPages = this.getPages.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.setBuffers = this.setBuffers.bind(this);

		this.state = {
			currentPage: 1
		};
	}

	getPages() {
		const {total} = this.props;
		const {currentPage} = this.state;

		const {prevPageBuffer, nextPageBuffer} = this.setBuffers();

		const startPage = currentPage - prevPageBuffer;
		const totalPages = nextPageBuffer + prevPageBuffer + 1;

		const pages = times(totalPages, i => {
			const pageNumber = startPage + i;

			return {
				label: pageNumber,
				number: pageNumber
			};
		});

		if (prevPageBuffer) {
			pages.unshift(
				{
					label: '«',
					number: 1
				},
				{
					label: '‹',
					number: (currentPage - 1)
				}
			);
		}

		if (nextPageBuffer) {
			pages.push(
				{
					label: '›',
					number: (currentPage + 1)
				},
				{
					label: '»',
					number: total
				}
			);
		}

		return pages;
	}

	handleClick(page) {
		const {onClick} = this.props;

		this.setState(
			{
				currentPage: page
			}
		)

		onClick(page);
	}

	setBuffers() {
		const {total} = this.props;
		const {currentPage} = this.state;

		let nextPageBuffer = PAGE_BUFFER;
		let prevPageBuffer = 0;

		if (currentPage > 1) {
			prevPageBuffer =
				currentPage > PAGE_BUFFER ? PAGE_BUFFER : currentPage - 1;

			if (currentPage === total) {
				nextPageBuffer = 0;
			} else {
				nextPageBuffer =
					total - currentPage >= PAGE_BUFFER
						? PAGE_BUFFER
						: total - currentPage;
			}
		}

		return {prevPageBuffer, nextPageBuffer};
	}

	render() {
		return (
			<nav class="pagination">
				<ul>
					{this.getPages().map(page => (
						<PaginationItem
							active={this.state.currentPage === page.number}
							label={page.label}
							number={page.number}
							onClick={this.handleClick}
						/>
					))}
				</ul>
			</nav>
		);
	}
}

Pagination.PropTypes = {
	onClick: PropTypes.func.isRequired,
	perPage: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired
};

export default Pagination;