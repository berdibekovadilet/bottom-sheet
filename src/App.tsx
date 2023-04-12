import React, {useState} from "react";
import BottomSheetModal from "./variant2/BottomSheetModal";
import "./variant2/BottomSheetModal.css"

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
                <button className="openButton" onClick={handleOpenModal}>
                    Открыть
                </button>
            </div>
            <BottomSheetModal isOpen={modalOpen} onClose={handleCloseModal}>
                <h2>Модальное окно</h2>
                <p>Здесь может быть ваш контент.</p>
            </BottomSheetModal>
        </div>
    );
};

export default App;
