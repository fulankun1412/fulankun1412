import streamlit as st
from common.commonInterface import CommonInterface
import base64
import fitz
from PIL import Image
import io

st.set_page_config(page_title="ML Project || Curriculum Vitae & Resume",
                   page_icon="📝",
                   layout="wide",
                   initial_sidebar_state="expanded")

class CvResumeInterface(CommonInterface):
    def __init__(self) -> None:
        pass
    def displayPDF(self, file):
        # Opening file from file path
        with open(file, "rb") as f:
            base64_pdf = base64.b64encode(f.read()).decode('utf-8')

        # Embedding PDF in HTML
        #pdf_display = f'<embed src="data:application/pdf;base64,{base64_pdf}" width="100%" height="1000" type="application/pdf">'
        pdf_display = f'<iframe src="data:application/pdf;base64,{base64_pdf}" width="100%" height="1000" type="application/pdf"></iframe>'

        # Displaying File
        st.markdown(pdf_display, unsafe_allow_html=True)

    def renderPDF(self, file):
        doc = fitz.open(file)
        for page_number in range(doc.page_count):
            page = doc.load_page(page_number)
            image_bytes = page.get_pixmap().tobytes()
            image = Image.open(io.BytesIO(image_bytes))
            st.image(image, caption=f"Page {page_number + 1}", use_column_width=True)
        doc.close()

    def main(self):
        st.header("Curriculum Vitae & Resume Viewer")
        tab1, tab2, tab3 = st.tabs(["Curriculum Vitae", "Resume", "Certificates"])
        with tab1:
            self.renderPDF("./static/cv.pdf")
        with tab2:
            self.renderPDF("./static/resume.pdf")
        with tab3:
            self.renderPDF("./static/certificates.pdf")
        self.sidebar()

if __name__ == "__main__":
    start = CvResumeInterface()
    start.main()