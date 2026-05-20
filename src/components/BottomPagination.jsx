import { FaHome } from "react-icons/fa";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";

const pages = ["/", "/login", "/sign-up", "/profile"];

const BottomPagination = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentIndex = pages.indexOf(location.pathname);

  const nextPage = () => {
    if (currentIndex < pages.length - 1) {
      navigate(pages[currentIndex + 1]);
    }
  };

  const prevPage = () => {
    if (currentIndex > 0) {
      navigate(pages[currentIndex - 1]);
    }
  };
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t py-4">
      <div className="flex items-center justify-center gap-6 text-gray-600">
        <button onClick={() => navigate("/")}>
          <FaHome size={20} />
        </button>

        <button
          onClick={prevPage}
          disabled={currentIndex === 0}
          className="disabled:opacity-30"
        >
          <IoChevronBack size={22} />
        </button>

        <p className="text-sm font-medium text-black">
          {currentIndex + 1} of {pages.length}
        </p>

        <button
          onClick={nextPage}
          disabled={currentIndex === pages.length - 1}
          className="disabled:opacity-30"
        >
          <IoChevronForward size={22} />
        </button>
      </div>
    </div>
  );
};

export default BottomPagination;
