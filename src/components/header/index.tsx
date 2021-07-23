import React from "react";

interface IHeaderProps {
  onOpenNewClientModal: () => void;
}

export const Header = ({ onOpenNewClientModal }: IHeaderProps) => {
  return (
    <div>
      <button onClick={onOpenNewClientModal} type="button">
        Nova transação
      </button>
    </div>
  );
};
