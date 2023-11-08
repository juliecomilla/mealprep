"""meal, cocktail ingred/measure columns added

Revision ID: 08e5ed8ce1e0
Revises: 058b013b3cec
Create Date: 2023-11-07 11:10:01.875918

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '08e5ed8ce1e0'
down_revision = '058b013b3cec'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('cocktails', schema=None) as batch_op:
        batch_op.add_column(sa.Column('alcoholic', sa.String(), nullable=False))
        batch_op.add_column(sa.Column('ingred1', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('ingred2', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('ingred3', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('ingred4', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('ingred5', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('measure1', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('measure2', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('measure3', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('measure4', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('measure5', sa.String(), nullable=True))
        batch_op.drop_column('base')

    with op.batch_alter_table('meals', schema=None) as batch_op:
        batch_op.add_column(sa.Column('ingred1', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('ingred2', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('ingred3', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('ingred4', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('ingred5', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('ingred6', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('ingred7', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('ingred8', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('ingred9', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('ingred10', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('ingred11', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('ingred12', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('ingred13', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('ingred14', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('ingred15', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('ingred16', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('ingred17', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('ingred18', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('ingred19', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('measure1', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('measure2', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('measure3', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('measure4', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('measure5', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('measure6', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('measure7', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('measure8', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('measure9', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('measure10', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('measure11', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('measure12', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('measure13', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('measure14', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('measure15', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('measure16', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('measure17', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('measure18', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('measure19', sa.String(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('meals', schema=None) as batch_op:
        batch_op.drop_column('measure19')
        batch_op.drop_column('measure18')
        batch_op.drop_column('measure17')
        batch_op.drop_column('measure16')
        batch_op.drop_column('measure15')
        batch_op.drop_column('measure14')
        batch_op.drop_column('measure13')
        batch_op.drop_column('measure12')
        batch_op.drop_column('measure11')
        batch_op.drop_column('measure10')
        batch_op.drop_column('measure9')
        batch_op.drop_column('measure8')
        batch_op.drop_column('measure7')
        batch_op.drop_column('measure6')
        batch_op.drop_column('measure5')
        batch_op.drop_column('measure4')
        batch_op.drop_column('measure3')
        batch_op.drop_column('measure2')
        batch_op.drop_column('measure1')
        batch_op.drop_column('ingred19')
        batch_op.drop_column('ingred18')
        batch_op.drop_column('ingred17')
        batch_op.drop_column('ingred16')
        batch_op.drop_column('ingred15')
        batch_op.drop_column('ingred14')
        batch_op.drop_column('ingred13')
        batch_op.drop_column('ingred12')
        batch_op.drop_column('ingred11')
        batch_op.drop_column('ingred10')
        batch_op.drop_column('ingred9')
        batch_op.drop_column('ingred8')
        batch_op.drop_column('ingred7')
        batch_op.drop_column('ingred6')
        batch_op.drop_column('ingred5')
        batch_op.drop_column('ingred4')
        batch_op.drop_column('ingred3')
        batch_op.drop_column('ingred2')
        batch_op.drop_column('ingred1')

    with op.batch_alter_table('cocktails', schema=None) as batch_op:
        batch_op.add_column(sa.Column('base', sa.VARCHAR(), nullable=False))
        batch_op.drop_column('measure5')
        batch_op.drop_column('measure4')
        batch_op.drop_column('measure3')
        batch_op.drop_column('measure2')
        batch_op.drop_column('measure1')
        batch_op.drop_column('ingred5')
        batch_op.drop_column('ingred4')
        batch_op.drop_column('ingred3')
        batch_op.drop_column('ingred2')
        batch_op.drop_column('ingred1')
        batch_op.drop_column('alcoholic')

    # ### end Alembic commands ###