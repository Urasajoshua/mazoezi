from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate ,paragraph
from reportlab.lib.styles import getSampleStyleSheet


def hello():
    doc =  SimpleDocTemplate(filename='joshua.pdf',pagesize=letter,rightMargin=72,leftMargin=72,topMargin=72,bottomMargin=18)
    styles = getSampleStyleSheet()
    flowables = []
    
    text  = 'hello programmer'
    para = paragraph(text)
    flowables.append(para)
    doc.build(flowables)
    
    
hello()
    