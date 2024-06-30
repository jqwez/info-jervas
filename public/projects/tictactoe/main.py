
game_div = Element("game")

def display_modal(content):
    body = Element("body")
    body.element.innerHTML = f'<div id="modal" class="modal"> <span>{content} </span>    <button class="btn" py-click="play_again()">Play Again</button></div>' + body.element.innerHTML

def remove_modal():
    modal_div = Element("modal")
    modal_div.element.remove()
    
squares_by_location = []

def setup_board():
    game_div.element.innerHTML = ""
    for i in range(3):
        game_div.element.innerHTML += f'<div id="column-{i}" class="column">   </div>'
        column_div = Element(f"column-{i}")
        for j in range(3):
            squares_by_location.append(f"col{i}row{j}")
            column_div.element.innerHTML += f'<div id="col{i}row{j}" class="col{i} row{j}" py-click="clicked_box({i}, {j})">  </div>'

setup_board()

square_statuses = [None for i in range(9)]
square_map = {key:value for key, value in zip(  squares_by_location , range(9) )}


turn = "X"
def change_turns():
    global turn
    turn = "X" if turn == "O" else "O"

winning_conditions = [(0,1,2),(3,4,5),(6,7,8),(0,3,6),(1,4,7),(2,5,8),(0,4,8),(2,4,6)]
winning_map = {}

def check_game_over():
    for condition in winning_conditions:
        if all(map(lambda x: square_statuses[x]=="X", condition)):
            display_modal("X Wins!")
            return True
        if all(map(lambda x: square_statuses[x]=="O", condition)):
            display_modal("O Wins!")
            return True
        if all(square_statuses):
            display_modal("It's a Draw")
            return True
    return False


def clicked_box(col, row):
    if check_game_over():
        return
    if square_statuses[square_map[f"col{col}row{row}"]] != None:
        print("already occupied")
        return
    square_statuses[square_map[f"col{col}row{row}"]] = turn 
    clicked_div = Element(f"col{str(col)}row{str(row)}")
    clicked_div.element.innerText = turn
    check_game_over()
    change_turns()
        
def reset_board():
    global square_statuses
    square_statuses = [None for i in range(9)]
    global turn
    turn = "X"
    setup_board()

def add_reset_button():
    buttons_div = Element("buttons-div")
    buttons_div.element.innerHTML += f'<button id="reset-btn" class="btn" py-click="reset_board()">Reset Game</div>'

def remove_reset_button():
    buttons_div = Element("buttons-div")
    buttons_div.element.remove()

def play_again():
    reset_board()
    remove_modal()


def one_player_start():
    print("Computer Opponent not yet Implemented")
    pass

def two_player_start():
    remove_modal()
    add_reset_button()
    pass