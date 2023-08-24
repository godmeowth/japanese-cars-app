import { connect } from "react-redux";
import Navbar from "./Navbar"; // Adjust the import path as needed
import { filterByAscendingPrice, filterByDescendingPrice, cancelFilter } from "../../redux/actions";

const NavbarContainer = ({
                             filterByAscendingPrice,
                             filterByDescendingPrice,
                             cancelFilter,
                         }) => {
    const handleFilterChange = (selectedFilter) => {
        if (selectedFilter === "ascending") {
            filterByAscendingPrice();
        } else if (selectedFilter === "descending") {
            filterByDescendingPrice();
        } else if (selectedFilter === "cancel") {
            cancelFilter();
        }
    };

    return (
        <Navbar
            handleFilterChange={handleFilterChange}
            filterByAscendingPrice={filterByAscendingPrice}
            filterByDescendingPrice={filterByDescendingPrice}
            cancelFilter={cancelFilter}
        />
    );
};

const mapDispatchToProps = {
    filterByAscendingPrice,
    filterByDescendingPrice,
    cancelFilter,
};

export default connect(null, mapDispatchToProps)(NavbarContainer);
