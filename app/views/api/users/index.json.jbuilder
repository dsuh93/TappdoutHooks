@users.each do |user|
  json.set! @user.id do 
    json.extract! @user, :id, ...users_columns
  end
end