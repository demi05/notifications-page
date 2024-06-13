import { useState, createContext } from "react";

type NotificationObjType = {
    name: string;
    text: string;
    post?: string;
    time: string;
    message?: string;
    img: string;
    imgOpt?: string;
  };

type GlobalContextType = {
  activeNotification: number;
  setActiveNotification: React.Dispatch<React.SetStateAction<number>>;
  handleRead: (index:number) => void;
  notificationObj: NotificationObjType[];
  setNotificationObj: React.Dispatch<React.SetStateAction<NotificationObjType[]>>;
  handleChange: () => void;
}

type GlobalContextProviderProps = {
  children: React.ReactNode
}

const GlobalContext = createContext({} as GlobalContextType)

export const GlobalProvider = ({children}: GlobalContextProviderProps) => {
  const [notificationObj, setNotificationObj] = useState<NotificationObjType[]>([]);
  const notificationLength = notificationObj.length 
  let [activeNotification, setActiveNotification] = useState(7)

    const handleRead  = (index: number) => {
      const read: HTMLElement | null = document.querySelector(`.read-${index}`);
      const notifications: HTMLElement | null = document.querySelector(
        `.notification-${index}`
      );
      if (read) {
        read.style.display = "none";
        setActiveNotification((prev) => prev - 1)
        if(activeNotification === 0){
          setActiveNotification(0)
        }
        if (notifications) {
          notifications.style.backgroundColor = "hsl(0, 0%, 100%)";
        }
      }
    };

    const handleChange = () => {
      const readElements: NodeListOf<HTMLElement> = document.querySelectorAll(`.read`);
      const notifications: NodeListOf<HTMLElement> = document.querySelectorAll(
        `.notification`
      );

      readElements.forEach((read) => {
        read.style.display = "none";
      }) 
      notifications.forEach((notification) => {
        notification.style.backgroundColor = "hsl(0, 0%, 100%)"
      })
      setActiveNotification(0)
    }

  return (
    <GlobalContext.Provider value={{activeNotification,setActiveNotification, handleRead, notificationObj, setNotificationObj,handleChange}}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useContextValues = GlobalContext