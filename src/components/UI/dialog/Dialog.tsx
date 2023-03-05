import { Dialog } from "primereact/dialog";

type Props = {
  showMessage: boolean;
  setShowMessage: (value: boolean) => void;
  dialogFooter: React.ReactNode;
};

export const DialogComponent: React.FC<Props> = ({
  showMessage,
  setShowMessage,
  dialogFooter,
}: Props): JSX.Element => {
  return (
    <>
      <Dialog
        visible={showMessage}
        onHide={() => setShowMessage(false)}
        position="top"
        footer={dialogFooter}
        showHeader={false}
        breakpoints={{ "960px": "80vw" }}
        style={{ width: "30vw" }}
      >
        <div className="flex justify-content-center flex-column pt-6 px-3">
          <i
            className="pi pi-check-circle"
            style={{ fontSize: "5rem", color: "var(--green-500)" }}
          ></i>
          <h5>Registration Successful!</h5>
          {/* <p style={{ lineHeight: 1.5, textIndent: "1rem" }}>
            Your account is registered under name <b>{formData.name}</b> ; it'll
            be valid next 30 days without activation. Please check{" "}
            <b>{formData.email}</b> for activation instructions.
          </p> */}
        </div>
      </Dialog>
    </>
  );
};
