import React, {useState} from "react";
import BottomSheetModal from "./variant2/BottomSheetModal";
import "./variant2/BottomSheetModal.css"
import BottomDrawer from "./variant3/BottomDrawer";

const App: React.FC = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div>
            <div className="centerContainer">
                <div className="btnGroup">
                    <button className="openButton" onClick={handleOpenModal}>
                        Открыть Bottom Sheet
                    </button>
                    <BottomDrawer />
                </div>

            </div>
            <BottomSheetModal isOpen={modalOpen} onClose={handleCloseModal}>
                <h2>Модальное окно</h2>
                <p>Здесь может быть ваш контент.</p>
            </BottomSheetModal>
        </div>
    );
};

export default App;
