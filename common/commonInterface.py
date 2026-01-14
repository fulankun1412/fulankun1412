import streamlit as st

class CommonInterface:
    def __init__(self) -> None:
        pass
    
    def sidebar(self):
        projectTitleSidebar = """
                                <style>
                                    /* Set the container's style */
                                    .container {
                                    position: relative; /* Make sure the container is a positioned element */
                                    height: 0px; /* Set the container's height */
                                    }

                                    /* Set the text's style */
                                    .bottom-text {
                                    bottom: 0; /* Align the text to the bottom of the container */
                                    /* Additional styling */
                                    padding: 10px;
                                    }
                                </style>
                                <div class="container">
                                    <h2 class="bottom-text">Lanang Afkaar's Machine Learning Project</h2>
                                </div>
                        """
        with st.sidebar:
            with st.container():
                st.sidebar.markdown("⬆️ Project Navigation ⬆️")
            st.markdown(projectTitleSidebar, unsafe_allow_html=True)