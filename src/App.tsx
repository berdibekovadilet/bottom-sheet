import React, { useState } from "react";
import BottomSheetModal from "./BottomSheetModal";

const App: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <button onClick={openModal}>Открыть модальное окно</button>
            <BottomSheetModal isOpen={isModalOpen} onClose={closeModal}>
                <h2>Заголовок модального окна</h2>
                <p>Текст внутри модального окна</p>
                {/* Вставьте дополнительный контент здесь */}
            </BottomSheetModal>
        </div>
    );
};

export default App;
