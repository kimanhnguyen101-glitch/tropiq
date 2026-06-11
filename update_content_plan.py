"""
Run this script to update the Content Plan sheet in TropiQ_SEO_Content_Plan_v2.xlsx
Usage: python update_content_plan.py
Make sure the Excel file is CLOSED before running.
"""

from openpyxl import load_workbook
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter
import os

FILE = os.path.join(os.path.dirname(__file__), "TropiQ_SEO_Content_Plan_v2.xlsx")

OLIVE="607648"; CREAM="EEE2D6"; GOLD="B56B2C"; WHITE="FFFFFF"; INK="2C2C2A"
HIGH_RED="FCE4D6"; MED_YELLOW="FFF2CC"; LOW_GREY="EDEDED"; DONE_GREEN="C6EFCE"

def hdr(ws, r, c, v):
    cell = ws.cell(r, c, v)
    cell.font = Font(name="Arial", bold=True, color=CREAM, size=10)
    cell.fill = PatternFill("solid", fgColor=OLIVE)
    cell.alignment = Alignment(horizontal="center", vertical="center", wrap_text=True)

def cel(ws, r, c, v, bg=None, fg=INK, bold=False, sz=9, center=False):
    cell = ws.cell(r, c, v)
    cell.font = Font(name="Arial", bold=bold, color=fg, size=sz)
    if bg: cell.fill = PatternFill("solid", fgColor=bg)
    cell.alignment = Alignment(horizontal="center" if center else "left", vertical="center", wrap_text=True)

def borders(ws, r1, r2, c1, c2):
    t = Side(style="thin", color="C0C0C0")
    for r in range(r1, r2+1):
        for c in range(c1, c2+1):
            ws.cell(r,c).border = Border(left=t, right=t, top=t, bottom=t)

wb = load_workbook(FILE)
if "Content Plan" in wb.sheetnames:
    del wb["Content Plan"]
ws3 = wb.create_sheet("Content Plan")
ws3.sheet_view.showGridLines = False

# Title
ws3.merge_cells("A1:J1")
c = ws3["A1"]
c.value = "TROPI Q — SEO Content Plan (15 articles · primary keywords from confirmed list only)"
c.font = Font(name="Arial", bold=True, color=CREAM, size=13)
c.fill = PatternFill("solid", fgColor=OLIVE)
c.alignment = Alignment(horizontal="center", vertical="center")
ws3.row_dimensions[1].height = 36

ws3.merge_cells("A2:J2")
s = ws3["A2"]
s.value = "Primary keyword column = ONLY the 13 confirmed keywords. Same keyword can appear in multiple articles with different angles & secondary keywords."
s.font = Font(name="Arial", italic=True, color=GOLD, size=9)
s.fill = PatternFill("solid", fgColor="F7F3EE")
s.alignment = Alignment(horizontal="center", vertical="center")
ws3.row_dimensions[2].height = 20

# Column headers
cols   = ["#","SEO Article Title","Primary Keyword(s)","Volume /mo","Secondary Keywords","Pillar","Intent","Words","Priority","Status"]
widths = [4,  46,                 28,                  11,           44,                   24,      14,      8,      10,        14]
for i,(h,w) in enumerate(zip(cols,widths),1):
    hdr(ws3,3,i,h)
    ws3.column_dimensions[get_column_letter(i)].width = w
ws3.row_dimensions[3].height = 32

# ── 15 articles — primary KWs strictly from the 13 confirmed ─────────
arts = [
("A1","What Is a Head Spa? Everything You Need to Know",
 "headspa",9900,
 "what is a head spa · head spa benefits · head spa vs hair spa · scalp treatment · head spa first time",
 "Head Spa Education","Informational",1600,"Done","✅ Published"),

("A2","7 Relaxing Things to Do in Hanoi Near Hoan Kiem Lake",
 "headspa",9900,
 "things to do Hanoi · relaxing Hanoi · head spa Hanoi · Hoan Kiem activities · spa near Old Quarter",
 "Hanoi Travel Experience","Informational",2000,"Done","✅ Ready to deploy"),

("A3","Best Massage in Hanoi: A Complete Guide for Tourists",
 "massage Hanoi · best massage Hanoi",6400,
 "cheap massage Hanoi · Thai massage Hanoi · professional massage Hanoi · body massage Hanoi · deep tissue Hanoi",
 "Hanoi Spa & Massage","Transactional",2500,"High","🔲 Planned"),

("A4","Best Spa in Hanoi: Top Picks for Every Budget and Need",
 "spa in Hanoi · best spa in Hanoi",2780,
 "luxury spa Hanoi · day spa Hanoi · spa near Hoan Kiem · spa for tourists Hanoi · top-rated spa Hanoi",
 "Hanoi Spa & Massage","Transactional",2000,"High","🔲 Planned"),

("A5","Head Spa in Hanoi: What It Is, Where to Go, What to Expect",
 "head spa Hanoi · hair spa Hanoi · best head spa Hanoi",1200,
 "Vietnamese head spa · scalp treatment Hanoi · headspa Hanoi · authentic head spa Hanoi · head spa near Hoan Kiem",
 "Head Spa Education","Transactional",1800,"High","🔲 Planned"),

("A6","Best Spa and Massage in Hanoi Old Quarter: A Local Guide",
 "massage Hanoi Old Quarter · spa Old Quarter Hanoi",910,
 "massage near Hoan Kiem · relaxing Old Quarter · spa walk Old Quarter · quiet spa Old Quarter",
 "Hanoi Spa & Massage","Transactional",1500,"High","🔲 Planned"),

("A7","Nail Salon in Hanoi: What Every Tourist Needs to Know",
 "hanoi nail salon",390,
 "nail art Hanoi · manicure Hanoi · pedicure Hanoi · gel nails Hanoi · nail near Old Quarter",
 "Tropi Q Services","Transactional",1200,"Medium","🔲 Planned"),

("A8","Body Massage in Hanoi: Types, Prices, and Best Places",
 "body massage Hanoi",260,
 "full body massage Hanoi · Swedish massage Hanoi · deep tissue Hanoi · relaxing massage Hanoi",
 "Tropi Q Services","Transactional",1500,"Medium","🔲 Planned"),

("A9","Facial Treatment in Hanoi: A Guide for Tourists",
 "facial Hanoi",170,
 "skin care Hanoi · hydrating facial Hanoi · anti-aging facial Hanoi · facial near Old Quarter",
 "Tropi Q Services","Transactional",1200,"Medium","🔲 Planned"),

("A10","Vietnamese Head Spa vs Regular Massage: Which One Do You Actually Need?",
 "headspa · massage Hanoi",15300,
 "head spa vs massage · difference head spa massage · scalp vs body massage · should I get head spa or massage",
 "Head Spa Education","Informational",1500,"Medium","🔲 Planned"),

("A11","Oily Scalp Care: What a Head Spa Does That Nothing Else Can",
 "headspa · head spa Hanoi",10620,
 "oily scalp head spa · scalp sebum treatment · oily hair roots solution · scalp detox · head spa scalp care",
 "Scalp & Skin Care","Informational",1500,"Medium","🔲 Planned"),

("A12","Hair Spa in Hanoi: The Full Experience Explained",
 "hair spa Hanoi · headspa",10290,
 "hair spa vs head spa · hair treatment Hanoi · scalp spa Hanoi · Vietnamese hair spa · hair spa benefits",
 "Head Spa Education","Informational",1200,"Medium","🔲 Planned"),

("A13","How to Find the Best Spa in Hanoi Without Getting Ripped Off",
 "spa in Hanoi · best spa in Hanoi",2780,
 "safe spa Hanoi · spa price Hanoi · tourist trap spa Hanoi · how to choose spa Hanoi · trustworthy spa Hanoi",
 "Hanoi Spa & Massage","Informational",1500,"Low","🔲 Planned"),

("A14","Massage in Hanoi: How Much It Costs and What You Actually Get",
 "massage Hanoi · best massage Hanoi",6400,
 "massage price Hanoi · how much massage Hanoi · cheap vs good massage Hanoi · what to expect massage Hanoi",
 "Hanoi Spa & Massage","Informational",1500,"Low","🔲 Planned"),

("A15","Traditional Spa in Hanoi Old Quarter: Beyond the Tourist Trail",
 "spa Old Quarter Hanoi · massage Hanoi Old Quarter",910,
 "hidden spa Old Quarter · authentic spa Hanoi · local spa Hanoi · spa like locals Hanoi · non-tourist spa Hanoi",
 "Hanoi Travel Experience","Informational",1200,"Low","🔲 Planned"),
]

ST_BG = {"✅ Published":DONE_GREEN,"✅ Ready to deploy":DONE_GREEN,"🔲 Planned":WHITE}
PR_BG = {"Done":DONE_GREEN,"High":HIGH_RED,"Medium":MED_YELLOW,"Low":LOW_GREY}

for i,a in enumerate(arts,1):
    r = i+3
    ws3.row_dimensions[r].height = 44
    bg = "F7F3EE" if i%2==0 else WHITE

    cel(ws3,r,1,a[0],bg,OLIVE,bold=True,center=True)
    cel(ws3,r,2,a[1],bg,INK,bold=True)

    pk = ws3.cell(r,3,a[2])
    pk.font = Font(name="Arial",bold=True,color=GOLD,size=9)
    pk.fill = PatternFill("solid",fgColor="FEF4E8")
    pk.alignment = Alignment(horizontal="left",vertical="center",wrap_text=True)

    cel(ws3,r,4,a[3],bg,INK,bold=True,center=True)
    cel(ws3,r,5,a[4],bg,"505050",sz=8)
    cel(ws3,r,6,a[5],bg,OLIVE)
    cel(ws3,r,7,a[6],bg,"505050")
    cel(ws3,r,8,a[7],bg,INK,center=True)

    pc = ws3.cell(r,9,a[8])
    pc.font = Font(name="Arial",bold=True,size=9,color=INK)
    pc.fill = PatternFill("solid",fgColor=PR_BG.get(a[8],WHITE))
    pc.alignment = Alignment(horizontal="center",vertical="center")

    sc = ws3.cell(r,10,a[9])
    sc.font = Font(name="Arial",size=9,color=INK)
    sc.fill = PatternFill("solid",fgColor=ST_BG.get(a[9],WHITE))
    sc.alignment = Alignment(horizontal="center",vertical="center")

borders(ws3,3,18,1,10)
ws3.freeze_panes = ws3.cell(4,1)

wb.save(FILE)
print(f"✅ Done — Content Plan sheet updated in: {FILE}")
