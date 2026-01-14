import streamlit as st
from common.commonInterface import CommonInterface

st.set_page_config(page_title="Lanang Afkaar's Machine Learning Project",
                   page_icon="🏠",
                   layout="wide",
                   initial_sidebar_state="expanded")


class HomeInterface(CommonInterface):
    def __init__(self) -> None:
        pass

    def aboutMe(self):
        aboutMeDesc = """
                    <div style="text-align: justify;">
                    <p>An enthusiastic person, self-motivated, reliable, responsible, and adaptable to all challenging situations. 
                    Able to work well both in a team environment as well as using my own initiative. Eager to learn new things to improve, experience, and deepen my knowledge. 
                    Deeply interested in developing skills in machine learning, DevOps, IT management and Project Management. 
                    Experience with building recommendation systems, computer vision, MLOps, and analytics in previous projects. 
                    With built-up experience, skills, and team collaboration in Data Science, ready for creating an impact on any development for data modeling.</p>
                    </div>
                    """
        st.subheader("About me") 
        st.markdown(aboutMeDesc, unsafe_allow_html=True)

    def reachMe(self):
        reachMeDesc = """
                    <div style="text-align: justify;">
                        <p>You can reach me through these following links or just reach me through phone. Guaranteed ASAP will text you back!</p>
                    </div>
                    """
        linkAndPhone = """
                    - 🌐 LinkedIn: https://www.linkedin.com/in/lanangafkaar/
                    - 📩 Email me:
                      - afkaar2012@live.com
                      - lanangafkaar@gmail.com
                    - 🗃️ GitHub: https://github.com/fulankun1412
                    - ☎️ Whatsapp/Phone: (+62)81290548465
                    """
        st.subheader("How to reach me")
        st.markdown(reachMeDesc, unsafe_allow_html=True)
        st.markdown(linkAndPhone)

    def mainColumn(self):
        column1, column2 = st.columns([0.7, 0.3], gap="medium")
        with column1:
            with st.container():
                self.aboutMe()
                self.reachMe()
                
        with column2:
            with st.container():
                st.image("https://static.streamlit.io/examples/cat.jpg")

    def main(self):
        st.header("Welcome to my Machine Learning Project Portofolio")
        st.divider()
        self.mainColumn()
        self.sidebar()

if __name__ == "__main__":
    start = HomeInterface()
    start.main()