import streamlit as st
from common.commonInterface import CommonInterface

st.set_page_config(page_title="ML Project || Large Language Model",
                   page_icon="🌐",
                   layout="wide",
                   initial_sidebar_state="expanded")

class LLMInterface(CommonInterface):
    def __init__(self) -> None:
        pass

    def main(self):
        st.title("🛠️ UNDER CONSTRUCTIONS 🛠️")
        self.sidebar()

if __name__ == "__main__":
    start = LLMInterface()
    start.main()